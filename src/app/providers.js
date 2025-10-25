"use client";

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { checkLoginStatus } from '@/utils/kakaoAuth';
import { updateAuthState } from '@/store/authSlice';

export function Providers({ children }) {
  useEffect(() => {
    // 페이지 로드 시 직접 checkLoginStatus 호출
    const initializeAuth = async () => {
      try {
        console.log('인증 상태 초기화 시작');
        const { isLoggedIn, user } = await checkLoginStatus();
        console.log('인증 상태 확인 결과:', { isLoggedIn, user });
        
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
