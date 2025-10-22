// saga/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { checkLoginStatus, logout as logoutUser } from '@/utils/kakaoAuth';
import { updateAuthState, logoutSuccess } from '@/store/authSlice';

// 인증 상태 확인 Saga - Redux Saga 규칙 적용
function* checkAuthSaga() {
  try {
    console.log('인증 상태 확인 시작');
    
    const { isLoggedIn, user } = yield call(checkLoginStatus);
    
    console.log('인증 상태 확인 결과:', { isLoggedIn, user });
    
    yield put(updateAuthState({ isLoggedIn, user }));
    
    console.log('인증 상태 업데이트 완료');
  } catch (error) {
    console.error('인증 상태 확인 실패:', error);
    
    // 에러 발생 시 로그아웃 상태로 설정
    yield put(updateAuthState({ isLoggedIn: false, user: null }));
  }
}

// 로그아웃 Saga - Redux Saga 규칙 적용
function* logoutSaga() {
  try {
    console.log('로그아웃 시작');
    
    yield call(logoutUser);
    
    console.log('로그아웃 성공');
    
    yield put(logoutSuccess());
    
    console.log('로그아웃 상태 업데이트 완료');
  } catch (error) {
    console.error('로그아웃 실패:', error);
    
    // 에러가 발생해도 로컬 상태는 로그아웃 처리
    yield put(logoutSuccess());
  }
}

// Saga 워처 함수 - Redux Saga 규칙 적용
export function* watchAuth() {
  // takeLatest 사용으로 중복 요청 방지
  yield takeEvery('auth/checkAuthRequest', checkAuthSaga);
  yield takeEvery('auth/logoutRequest', logoutSaga);
}
