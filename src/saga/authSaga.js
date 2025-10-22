// saga/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { checkLoginStatus, logout as logoutUser } from '@/utils/kakaoAuth';
import { updateAuthState, logout as logoutAction } from '@/store/authSlice';

function* checkAuthSaga() {
  try {
    const { isLoggedIn, user } = yield call(checkLoginStatus);
    yield put(updateAuthState({ isLoggedIn, user }));
  } catch (error) {
    console.error('인증 상태 확인 실패:', error);
    yield put(updateAuthState({ isLoggedIn: false, user: null }));
  }
}

function* logoutSaga() {
  try {
    yield call(logoutUser);
    yield put(logoutAction());
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
}

export function* watchAuth() {
  yield takeEvery('auth/checkAuthRequest', checkAuthSaga);
  yield takeEvery('auth/logoutRequest', logoutSaga);
}
