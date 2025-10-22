// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  theme: 'light',
  mounted: false,
};

// 슬라이스 생성
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      // localStorage에 저장
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
        // HTML 요소에 다크 모드 클래스 적용
        const root = document.documentElement;
        if (action.payload === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      // localStorage에 저장
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.theme);
        // HTML 요소에 다크 모드 클래스 적용
        const root = document.documentElement;
        if (state.theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    },
    setMounted: (state, action) => {
      state.mounted = action.payload;
    },
    initializeTheme: (state, action) => {
      state.theme = action.payload;
      state.mounted = true;
    },
  },
});

// 액션과 리듀서 내보내기
export const { setTheme, toggleTheme, setMounted, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
