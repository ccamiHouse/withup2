# Redux Saga 사용금지 규칙

## 🚫 Redux Saga 사용 금지

### 1. **Redux Saga 미들웨어 사용 금지**
- `redux-saga` 패키지 설치 금지
- `createSagaMiddleware` 사용 금지
- `sagaMiddleware` 설정 금지
- `rootSaga` 생성 금지

### 2. **Saga 관련 파일 생성 금지**
- `src/saga/` 폴더 생성 금지
- `*Saga.js` 파일 생성 금지
- `rootSaga.js` 파일 생성 금지

### 3. **Saga Effects 사용 금지**
- `call`, `put`, `takeEvery`, `takeLatest` 등 사용 금지
- `yield` 키워드 사용 금지
- Generator 함수 (`function*`) 사용 금지

### 4. **대안 구현 방식**

#### ✅ **인증 상태 확인**
```javascript
// ❌ 사가 사용 금지
function* checkAuthSaga() {
  const { isLoggedIn, user } = yield call(checkLoginStatus);
  yield put(updateAuthState({ isLoggedIn, user }));
}

// ✅ 직접 API 호출 사용
const checkAuth = async () => {
  try {
    const { isLoggedIn, user } = await checkLoginStatus();
    dispatch(updateAuthState({ isLoggedIn, user }));
  } catch (error) {
    dispatch(updateAuthState({ isLoggedIn: false, user: null }));
  }
};
```

#### ✅ **로그아웃 처리**
```javascript
// ❌ 사가 사용 금지
function* logoutSaga() {
  yield call(logoutUser);
  yield put(logoutSuccess());
}

// ✅ 직접 API 호출 사용
const logout = async () => {
  try {
    await fetch('${BACKEND_URL}/api-logined/auth/logout', { method: 'POST' });
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutSuccess()); // 에러가 발생해도 로컬 상태는 로그아웃
  }
};
```

### 5. **Redux Store 설정**
```javascript
// ❌ 사가 미들웨어 사용 금지
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

// ✅ 기본 Redux Toolkit 설정만 사용
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
```

### 6. **비동기 처리 방식**

#### **컴포넌트에서 직접 처리**
```javascript
// AuthInitializer.js
useEffect(() => {
  const initializeAuth = async () => {
    const { isLoggedIn, user } = await checkLoginStatus();
    dispatch(updateAuthState({ isLoggedIn, user }));
  };
  initializeAuth();
}, []);
```

#### **Custom Hook에서 처리**
```javascript
// useAuth.js
const logout = async () => {
  try {
    await fetch(`${BACKEND_URL}/api-logined/auth/logout`, { method: 'POST' });
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutSuccess());
  }
};
```

### 7. **장점**
- ✅ **단순성**: 복잡한 미들웨어 없이 직관적인 코드
- ✅ **성능**: 사가 미들웨어 오버헤드 제거
- ✅ **디버깅**: 일반적인 JavaScript 비동기 처리로 디버깅 용이
- ✅ **학습곡선**: Redux Saga 학습 없이도 구현 가능
- ✅ **번들 크기**: `redux-saga` 패키지 제거로 번들 크기 감소

### 8. **규칙 위반 시**
- 사가 관련 코드 발견 시 즉시 제거
- 직접 API 호출 방식으로 리팩토링
- `redux-saga` 의존성 제거
- 사가 관련 파일 삭제

---

**이 규칙은 프로젝트의 단순성과 유지보수성을 위해 Redux Saga 사용을 완전히 금지합니다.**
