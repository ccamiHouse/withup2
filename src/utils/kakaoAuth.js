/**
 * 카카오 로그인 유틸리티 함수
 * 라이브러리 없이 직접 구현
 */

// 백엔드 API URL 환경 변수
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/**
 * 카카오 로그인 URL 생성
 * @returns {string} 카카오 인증 URL
 */
export function getKakaoLoginPageUrl() {
  const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  
  if (!clientId || !redirectUri) {
    throw new Error('카카오 로그인 설정이 올바르지 않습니다. 환경변수를 확인해주세요.');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    // scope: 'profile_nickname,account_email', // 필요한 권한
    prompt: 'login', // 강제 로그인
  });

  return `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
}

/**
 * 카카오 로그인 실행
 * 브라우저에서 카카오 로그인 페이지로 리다이렉트
 */
export function initiateKakaoLogin() {
  try {
    const kakaoUrl = getKakaoLoginUrl();
    window.location.href = kakaoUrl;
  } catch (error) {
    console.error('카카오 로그인 초기화 실패:', error);
    throw error;
  }
}

/**
 * 쿠키 설정 함수 (프론트엔드에서 직접 설정)
 * @param {string} name - 쿠키 이름
 * @param {string} value - 쿠키 값
 * @param {number} days - 만료일 (일 단위)
 */
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * 쿠키에서 값 읽기 함수
 * @param {string} name - 쿠키 이름
 * @returns {string|null} 쿠키 값 또는 null
 */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
}

/**
 * 쿠키 삭제 함수
 * @param {string} name - 쿠키 이름
 */
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}


/**
 * 카카오 로그인 콜백 처리
 * URL에서 code를 추출하여 백엔드 API로 전송
 * @param {string} code - 카카오 인증 코드
 * @returns {Promise<Object>} 로그인 결과
 */
export async function handleKakaoCallback(code) {
  try {
    console.log('카카오 인증 코드 받음:', code);

    // axios를 사용한 API 호출
    const { api } = await import('./api');
    
    const data = await api.post('/api-guest/auth/login-signin/kakao', {
      code: code
    });

    console.log('카카오 로그인 성공:', data);
    
    // 백엔드에서 HttpOnly 토큰 자동 설정됨
    if (data.success && data.content) {
      const { accessToken, refreshToken, tokenType, userId } = data.content;
      console.log('로그인 성공, HttpOnly 토큰 자동 설정됨:', { userId, tokenType });
    }
    
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('카카오 로그인 콜백 처리 실패:', error);
    return {
      success: false,
      error: error.message || '카카오 로그인 처리 중 오류가 발생했습니다.'
    };
  }
}

/**
 * URL에서 인증 코드 추출
 * @param {string} url - 현재 페이지 URL
 * @returns {string|null} 인증 코드 또는 null
 */
export function extractAuthCode(url = window.location.href) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('code');
}

/**
 * URL에서 에러 메시지 추출
 * @param {string} url - 현재 페이지 URL
 * @returns {string|null} 에러 메시지 또는 null
 */
export function extractError(url = window.location.href) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('error');
}

/**
 * 로그인 상태 확인
 * @returns {Promise<{isLoggedIn: boolean, user?: any}>}
 */
export async function checkLoginStatus() {
  try {
    // axios를 사용한 API 호출
    const { api } = await import('./api');
    
    const data = await api.get('/api/auth/status');
    
    if (data.success && data.isLoggedIn) {
      return {
        isLoggedIn: true,
        user: data.user,
      };
    } else {
      return {
        isLoggedIn: false,
      };
    }
  } catch (error) {
    console.error('로그인 상태 확인 실패:', error);
    
    return {
      isLoggedIn: false,
    };
  }
}

/**
 * 로그아웃
 * @returns {Promise<boolean>} 성공 여부
 */
export async function logout() {
  try {
    // axios를 사용한 API 호출
    const { api } = await import('./api');
    
    const data = await api.post('/api-logined/auth/logout');
    console.log('로그아웃 성공:', data?.content?.message);
    
    // 로그인 페이지로 리다이렉트
    window.location.href = '/login';
    return true;
  } catch (error) {
    console.error('로그아웃 에러:', error);
    
    window.location.href = '/login';
    return false;
  }
}
