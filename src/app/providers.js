'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { updateAuthState } from '@/store/authSlice';
import { checkLoginStatus } from '@/utils/kakaoAuth';

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
