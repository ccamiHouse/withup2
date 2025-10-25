# 카카오 로그인 통합 가이드

이 문서는 Next.js 프로젝트에 카카오 OAuth 2.0 로그인을 통합하는 완전한 가이드를 제공합니다.

## 📋 목차

1. [전체 아키텍처](#전체-아키텍처)
2. [환경 설정](#환경-설정)
3. [카카오 로그인 프로세스](#카카오-로그인-프로세스)
4. [로그인 상태 확인 프로세스](#로그인-상태-확인-프로세스)
5. [코드 예제](#코드-예제)
6. [보안 고려사항](#보안-고려사항)
7. [문제 해결](#문제-해결)

---

## 🏗 전체 아키텍처

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       │ 1. 로그인 버튼 클릭
       ▼
┌─────────────────────────────────┐
│  getKakaoLoginPageUrl()         │
│  카카오 인증 URL 생성            │
└───────────┬─────────────────────┘
            │
            │ 2. 카카오 로그인 페이지로 리다이렉트
            ▼
┌─────────────────────────────────┐
│  kauth.kakao.com                │
│  사용자 인증                    │
└───────────┬─────────────────────┘
            │
            │ 3. 인증 완료 후 코드 반환
            ▼
┌─────────────────────────────────┐
│  /login?code=xxx               │
│  콜백 처리                      │
└───────────┬─────────────────────┘
            │
            │ 4. 백엔드 API로 코드 전송
            ▼
┌─────────────────────────────────┐
│  Backend API                    │
│  /api-guest/auth/login-signin/  │
│  kakao                          │
└───────────┬─────────────────────┘
            │
            │ 5. HttpOnly 쿠키 발급 (accessTokenLeeds)
            ▼
┌─────────────────────────────────┐
│  Redux Store                    │
│  인증 상태 저장                 │
└─────────────────────────────────┘
```

---

## ⚙️ 환경 설정

### 1. 필수 환경 변수

`.env.local` 파일에 다음 환경 변수를 추가합니다:

```bash
# 카카오 로그인 설정
NEXT_PUBLIC_KAKAO_REST_API_KEY=your_kakao_rest_api_key
NEXT_PUBLIC_KAKAO_REDIRECT_URL=http://localhost:3000/login

# 백엔드 API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8082
```

### 2. 카카오 개발자 콘솔 설정

1. [카카오 개발자 콘솔](https://developers.kakao.com/) 접속
2. 애플리케이션 등록
3. 플랫폼 설정에서 도메인 등록 (`http://localhost:3000`)
4. Redirect URI 등록 (`http://localhost:3000/login`)
5. REST API 키 발급

---

## 🔐 카카오 로그인 프로세스

### 프로세스 흐름도

```
┌──────────┐
│ 1단계    │  사용자가 로그인 버튼 클릭
│ 로그인   │  getKakaoLoginPageUrl() 호출
│ 요청     │  카카오 인증 URL 생성
└────┬─────┘
     │
     ▼
┌──────────┐
│ 2단계    │  window.location.href로
│ 리다이렉트│  카카오 로그인 페이지로 이동
└────┬─────┘
     │
     ▼
┌──────────┐
│ 3단계    │  사용자가 카카오 계정으로
│ 인증     │  로그인 및 동의
└────┬─────┘
     │
     ▼
┌──────────┐
│ 4단계    │  카카오가 인증 코드(code)와 함께
│ 콜백     │  /login?code=xxx로 리다이렉트
└────┬─────┘
     │
     ▼
┌──────────┐
│ 5단계    │  useEffect로 URL에서 code 추출
│ 코드 처리│  handleKakaoCallback() 호출
└────┬─────┘
     │
     ▼
┌──────────┐
│ 6단계    │  백엔드 API로 인증 코드 전송
│ 백엔드   │  POST /api-guest/auth/login-signin/kakao
│ API 호출 │  { code: "..." }
└────┬─────┘
     │
     ▼
┌──────────┐
│ 7단계    │  백엔드에서 HttpOnly 쿠키 발급
│ 쿠키 발급│  accessTokenLeeds 쿠키 저장
└────┬─────┘
     │
     ▼
┌──────────┐
│ 8단계    │  Redux Store에 로그인 상태 저장
│ 상태 업데이트│ isLoggedIn: true
└──────────┘
```

### 핵심 함수

#### 1. `getKakaoLoginPageUrl()` - 카카오 인증 URL 생성

```javascript
// src/utils/kakaoAuth.js

export function getKakaoLoginPageUrl() {
  const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  
  if (!clientId || !redirectUri) {
    throw new Error('카카오 로그인 설정이 올바르지 않습니다.');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    prompt: 'login', // 강제 로그인
  });

  return `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
}
```

**파라미터 설명:**
- `client_id`: 카카오 REST API 키
- `redirect_uri`: 인증 후 리다이렉트할 URL
- `response_type`: 'code' (인증 코드 방식)
- `prompt`: 'login' (항상 로그인 화면 표시)

#### 2. `initiateKakaoLogin()` - 로그인 시작

```javascript
export function initiateKakaoLogin() {
  try {
    const kakaoUrl = getKakaoLoginPageUrl();
    window.location.href = kakaoUrl;
  } catch (error) {
    console.error('카카오 로그인 초기화 실패:', error);
    throw error;
  }
}
```

#### 3. 콜백 처리 (로그인 페이지)

```javascript
// src/app/login/page.js

useEffect(() => {
  // URL에서 인증 코드 추출
  const authorization_code_kako = window.location.href.match(/[?&]code=([^&]+)/)?.[1];
  
  if (authorization_code_kako) {
    console.info('카카오 인증 코드:', authorization_code_kako);

    const handleKakaoAuth = async (code) => {
      try {
        setIsKakaoLoading(true);
        setError('');

        // 백엔드 API로 인증 코드 전송
        const result = await api.post(
          {
            uri: process.env.NEXT_PUBLIC_BACKEND_URL,
            path: '/api-guest/auth/login-signin/kakao'
          },
          { code: code }
        );

        console.log('카카오 로그인 성공:', result);
        
        // 메인 페이지로 리다이렉트
        window.location.href = '/';

      } catch (error) {
        console.error('카카오 로그인 에러:', error);
        setError(error.message || '카카오 로그인 처리 중 오류가 발생했습니다.');
      } finally {
        setIsKakaoLoading(false);
      }
    };

    handleKakaoAuth(authorization_code_kako);
  }
}, []);
```

---

## 🔍 로그인 상태 확인 프로세스

### 프로세스 흐름도

```
┌──────────┐
│ 1단계    │  애플리케이션 시작
│ 앱 초기화│  providers.js에서 checkLoginStatus() 호출
└────┬─────┘
     │
     ▼
┌──────────┐
│ 2단계    │  /api/auth/status로 GET 요청
│ API 호출 │  withCredentials: true (쿠키 포함)
└────┬─────┘
     │
     ▼
┌──────────┐
│ 3단계    │  accessTokenLeeds 쿠키 확인
│ 쿠키 확인│  HttpOnly 쿠키 읽기
└────┬─────┘
     │
     ▼
┌──────────┐
│ 4단계    │  { isLoggedIn: true/false, user: {} }
│ 응답 반환│  쿠키 있으면 true, 없으면 false
└────┬─────┘
     │
     ▼
┌──────────┐
│ 5단계    │  Redux Store 업데이트
│ 상태 저장│  updateAuthState({ isLoggedIn, user })
└──────────┘
```

### 핵심 함수

#### 1. `checkLoginStatus()` - 로그인 상태 확인

```javascript
// src/utils/kakaoAuth.js

export async function checkLoginStatus() {
  try {
    // axios를 사용한 API 호출
    const { api } = await import('./api');
    
    // /api/auth/status로 GET 요청
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
```

#### 2. API 라우트 - `/api/auth/status`

```javascript
// src/app/api/auth/status/route.js

export async function GET(request) {
  try {
    // HttpOnly 쿠키에서 accessTokenLeeds 확인
    const accessTokenLeeds = request.cookies.get('accessTokenLeeds')?.value;
    
    if (!accessTokenLeeds) {
      return Response.json({
        success: true,
        isLoggedIn: false,
        user: null,
      });
    }
    
    return Response.json({
      success: true,
      isLoggedIn: true,
      user: null, // 필요시 사용자 정보 추가
    });

  } catch (error) {
    console.error('사용자 정보 확인 실패:', error);
    return Response.json({
      success: true,
      isLoggedIn: false,
      user: null,
    });
  }
}
```

#### 3. 앱 초기화 시 인증 상태 확인

```javascript
// src/app/providers.js

export function Providers({ children }) {
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('인증 상태 초기화 시작');
        
        // 로그인 상태 확인
        const { isLoggedIn, user } = await checkLoginStatus();
        console.log('인증 상태 확인 결과:', { isLoggedIn, user });
        
        // Redux Store 업데이트
        store.dispatch(updateAuthState({ isLoggedIn, user }));
        console.log('인증 상태 업데이트 완료');
      } catch (error) {
        console.error('인증 상태 확인 실패:', error);
        store.dispatch(updateAuthState({ isLoggedIn: false, user: null }));
      }
    };

    initializeAuth();
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
```

#### 4. Redux Store 설정

```javascript
// src/store/authSlice.js

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    updateAuthState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.isLoading = false;
    },
  },
});
```

#### 5. 커스텀 훅 사용

```javascript
// src/hooks/useAuth.js

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading, error } = useSelector(state => state.auth);

  return {
    user,
    isLoggedIn,
    isLoading,
    error,
  };
}
```

**컴포넌트에서 사용:**

```javascript
// src/components/templates/Header.js

export default function Header() {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header>
      {isLoggedIn ? (
        <div>로그인됨: {user?.name}</div>
      ) : (
        <Link href="/login">로그인</Link>
      )}
    </header>
  );
}
```

---

## 📦 코드 예제

### 1. 로그인 버튼 컴포넌트

```javascript
import { getKakaoLoginPageUrl } from '@/utils/kakaoAuth';

export function LoginButton() {
  const handleKakaoLogin = () => {
    try {
      const kakaoUrl = getKakaoLoginPageUrl();
      window.location.href = kakaoUrl;
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
    }
  };

  return (
    <button onClick={handleKakaoLogin}>
      카카오 로그인
    </button>
  );
}
```

### 2. 로그아웃 처리

```javascript
// src/utils/kakaoAuth.js

export async function logout() {
  try {
    const { api } = await import('./api');
    
    // 백엔드 로그아웃 API 호출
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
```

---

## 🔒 보안 고려사항

### 1. HttpOnly 쿠키 사용

```javascript
// 백엔드에서 쿠키 설정 시
res.cookie('accessTokenLeeds', token, {
  httpOnly: true,  // JavaScript에서 접근 불가
  secure: true,    // HTTPS만 허용
  sameSite: 'lax', // CSRF 공격 방지
  maxAge: 86400000 // 1일
});
```

### 2. 환경 변수 보호

- `.env.local` 파일을 `.gitignore`에 추가
- 민감한 정보는 서버 사이드에서만 접근

### 3. CORS 설정

```javascript
// axios 설정
const apiClient = axios.create({
  withCredentials: true, // 쿠키 자동 포함
});
```

### 4. 토큰 만료 처리

```javascript
// API 응답 인터셉터에서 토큰 만료 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 토큰 만료 시 로그인 페이지로 리다이렉트
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

---

## 🐛 문제 해결

### 1. "리다이렉트 URI가 일치하지 않습니다" 오류

**원인:** 카카오 개발자 콘솔의 Redirect URI와 실제 URL이 일치하지 않음

**해결:**
1. 카카오 개발자 콘솔에서 Redirect URI 확인
2. 환경 변수 `NEXT_PUBLIC_KAKAO_REDIRECT_URL` 확인
3. 정확히 일치하도록 수정

### 2. 쿠키가 설정되지 않음

**원인:** 
- 백엔드에서 쿠키 설정이 올바르지 않음
- CORS 설정 문제
- `withCredentials` 설정 누락

**해결:**
```javascript
// axios 설정
const apiClient = axios.create({
  withCredentials: true,
});
```

### 3. 401 Unauthorized 에러

**원인:** 토큰이 만료되었거나 쿠키가 전송되지 않음

**해결:**
```javascript
// API 요청 시 쿠키 자동 포함 확인
apiClient.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});
```

---

## 📚 참고 자료

- [카카오 로그인 개발 가이드](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [OAuth 2.0 Authorization Code Flow](https://oauth.net/2/grant-types/authorization-code/)

---

## 🎯 체크리스트

### 구현 전
- [ ] 카카오 개발자 앱 등록
- [ ] Redirect URI 설정
- [ ] 환경 변수 설정
- [ ] 필요한 패키지 설치 (`axios`, `@reduxjs/toolkit`)

### 구현 중
- [ ] `getKakaoLoginPageUrl()` 함수 구현
- [ ] 콜백 처리 로직 구현
- [ ] 백엔드 API 연동
- [ ] `checkLoginStatus()` 구현
- [ ] Redux Store 설정
- [ ] 인증 상태 초기화

### 구현 후
- [ ] 로그인 플로우 테스트
- [ ] 로그아웃 플로우 테스트
- [ ] 쿠키 설정 확인
- [ ] 보안 설정 확인
- [ ] 에러 처리 확인

---

## 📝 요약

이 가이드는 다음과 같은 완전한 카카오 로그인 통합을 제공합니다:

1. **카카오 OAuth 2.0 인증 플로우** - Authorization Code 방식
2. **HttpOnly 쿠키 기반 인증** - 보안성 높은 토큰 관리
3. **Redux 상태 관리** - 전역 인증 상태 관리
4. **자동 인증 상태 확인** - 앱 시작 시 자동 로그인 확인
5. **안전한 로그아웃** - 쿠키 삭제 및 상태 초기화

다른 프로젝트에 적용할 때는 환경 변수와 API 엔드포인트만 수정하면 됩니다.
