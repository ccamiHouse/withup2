"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { checkLoginStatus, logout as logoutUser } from "@/utils/kakaoAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태 확인
  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const { isLoggedIn: loggedIn, user: userData } = await checkLoginStatus();
      
      setIsLoggedIn(loggedIn);
      setUser(userData || null);
    } catch (error) {
      console.error('인증 상태 확인 실패:', error);
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // 로그아웃
  const logout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  // 로그인 성공 시 사용자 정보 설정
  const setLoginUser = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    isLoggedIn,
    isLoading,
    checkAuth,
    logout,
    setLoginUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
