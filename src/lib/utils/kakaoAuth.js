/**
 * 카카오 로그인 유틸리티 함수
 */

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
    const kakaoUrl = getKakaoLoginPageUrl();
    window.location.href = kakaoUrl;
  } catch (error) {
    console.error('카카오 로그인 초기화 실패:', error);
    throw error;
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
 * 로그인 상태 확인
 * @returns {Promise<{isLoggedIn: boolean, user?: any}>}
 */
export async function checkLoginStatus() {
  try {
    const response = await fetch('/api/auth/status', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.success && data.isLoggedIn) {
        return {
          isLoggedIn: true,
          user: data.user,
        };
      }
    }
    
    return {
      isLoggedIn: false,
    };
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
    const response = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    
    console.log('로그아웃 성공');
    
    // 로그인 페이지로 리다이렉트
    window.location.href = '/login';
    return true;
  } catch (error) {
    console.error('로그아웃 에러:', error);
    
    window.location.href = '/login';
    return false;
  }
}
