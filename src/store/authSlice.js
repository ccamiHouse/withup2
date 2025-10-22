// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 비동기 액션 - 로그아웃 API 호출
export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api-logined/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 쿠키 포함
      });

      if (!response.ok) {
        throw new Error('로그아웃 실패');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 초기 상태 - Redux 규칙에 따른 네이밍 적용
const initialState = {
  user: null,
  isLoggedIn: false,        // 불린값: is 접두사 사용
  isLoading: false,         // 로딩 상태
  error: null,              // 에러 상태
};

// 슬라이스 생성
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 로그인 성공 시 사용자 정보 설정 - set 접두사 사용
    setLoginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    
    // 로그아웃 - 명확한 액션명
    logoutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    
    // 로그인 상태 업데이트 - update 접두사 사용
    updateAuthState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    
    // 로딩 상태 설정 - set 접두사 사용
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    // 에러 상태 설정 - set 접두사 사용
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    
    // 에러 클리어 - clear 접두사 사용
    clearError: (state) => {
      state.error = null;
    },
    
    // 기존 액션들
    checkAuthRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
  },
  // 비동기 액션 처리
  extraReducers: (builder) => {
    builder
      // 로그아웃 처리
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// 액션과 리듀서 내보내기 - Redux 규칙에 따른 네이밍
export const { 
  setLoginUser, 
  logoutSuccess, 
  updateAuthState, 
  setLoading, 
  setError, 
  clearError,
  checkAuthRequest
} = authSlice.actions;
export default authSlice.reducer;
