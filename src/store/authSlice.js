// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

// 슬라이스 생성
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 로그인 성공 시 사용자 정보 설정
    setLoginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    // 로그아웃
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    // 로그인 상태 업데이트
    updateAuthState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },
    // 로딩 상태 설정
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // 에러 상태 설정
    setError: (state, action) => {
      state.error = action.payload;
    },
    // 에러 클리어
    clearError: (state) => {
      state.error = null;
    },
    // Saga 액션들
    checkAuthRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutRequest: (state) => {
      state.isLoading = true;
    },
  },
});

// 액션과 리듀서 내보내기
export const { 
  setLoginUser, 
  logout, 
  updateAuthState, 
  setLoading, 
  setError, 
  clearError,
  checkAuthRequest,
  logoutRequest
} = authSlice.actions;
export default authSlice.reducer;
