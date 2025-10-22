"use client";

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export function AuthInitializer() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    // 페이지 로드 시 인증 상태 확인
    checkAuth();
  }, [checkAuth]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}
