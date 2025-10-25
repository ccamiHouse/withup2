"use client";

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { initiateKakaoLogin, extractAuthCode } from "@/utils/kakaoAuth";
import { api } from "@/utils/api";

export default function LoginPage() {
  const [isKakaoLoading, setIsKakaoLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const authorization_code_kako = window.location.href.match(/[?&]code=([^&]+)/)?.[1];
    if (authorization_code_kako) {
      console.info('카카오 인증 코드:', authorization_code_kako);
  
      // 카카오 로그인 처리 (유틸 함수 사용)
      const handleKakaoAuth = async (code) => {
        try {
          setIsKakaoLoading(true);
          setError('');
  
          // axios를 사용한 API 호출 (uri와 path를 별도로 전달)
          const result = await api.post(
            {
              uri: process.env.NEXT_PUBLIC_BACKEND_URL,
              path: '/api-guest/auth/login-signin/kakao'
            },
            {
              code: code
            }
          );
  
          console.log('카카오 로그인 성공:', result);
          
          // 로그인 성공 시 메인 페이지로 리다이렉트
          window.location.href = '/';
  
        } catch (error) {
          console.error('카카오 로그인 에러:', error);
          setError(error.message || '카카오 로그인 처리 중 오류가 발생했습니다.');
        } finally {
          setIsKakaoLoading(false);
        }
      };
  
      handleKakaoAuth(authorization_code_kako);
    }
  }, []);

  const handleKakaoLogin = () => {
    try {
      initiateKakaoLogin();
    } catch (error) {
      setError('카카오 로그인을 시작할 수 없습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WithUp</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">로그인</h1>
            </div>


            {/* Error Message */}
            {error && (
              <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Social Login */}
            <div className="space-y-3">
              <button 
                onClick={handleKakaoLogin}
                disabled={isKakaoLoading}
                className="w-full flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-medium text-gray-900 transition-colors disabled:opacity-50" 
                style={{backgroundColor: '#FEE500'}} 
                onMouseEnter={(e) => !isKakaoLoading && (e.target.style.backgroundColor = '#FDD835')} 
                onMouseLeave={(e) => !isKakaoLoading && (e.target.style.backgroundColor = '#FEE500')}
              >
                <Image 
                  src="/cacaologo.svg" 
                  alt="카카오톡" 
                  width={16} 
                  height={16}
                  className="h-4 w-4"
                />
                {isKakaoLoading ? '로그인 중...' : '카카오톡으로 계속하기'}
              </button>
              <button className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google로 계속하기
              </button>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
