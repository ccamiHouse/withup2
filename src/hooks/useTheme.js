// hooks/useTheme.js
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme, initializeTheme } from '@/store/themeSlice';
import { useEffect } from 'react';

export function useTheme() {
  const dispatch = useDispatch();
  const { theme, mounted } = useSelector(state => state.theme);

  // 컴포넌트 마운트 시 테마 초기화
  useEffect(() => {
    if (!mounted) {
      // localStorage에서 테마 설정 불러오기
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        dispatch(initializeTheme(savedTheme));
      } else {
        // 시스템 테마 감지
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        dispatch(initializeTheme(systemTheme));
      }
    }
  }, [dispatch, mounted]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // localStorage에 저장된 테마가 없을 때만 시스템 테마를 따름
      if (!localStorage.getItem('theme')) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch, mounted]);

  return {
    theme,
    mounted,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (newTheme) => dispatch(setTheme(newTheme)),
  };
}
