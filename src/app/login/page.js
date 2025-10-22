"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { motion } from "framer-motion";
import { initiateKakaoLogin, extractAuthCode, extractError, checkLoginStatus, handleKakaoCallback } from "@/utils/kakaoAuth";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isKakaoLoading, setIsKakaoLoading] = useState(false);

  // URL 파라미터 확인 (에러 메시지, 로그인 성공, 카카오 코드 등)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    const loginSuccess = urlParams.get('login');
    const kakaoCode = urlParams.get('code'); // 카카오 로그인 콜백에서 받은 인증 코드

    // 카카오 로그인 코드가 있는 경우 백엔드로 전송
    if (kakaoCode) {
      handleKakaoCode(kakaoCode);
      return;
    }

    if (errorParam) {
      switch (errorParam) {
        case 'no_code':
          setError('카카오 로그인 인증 코드를 받지 못했습니다.');
          break;
        case 'login_failed':
          setError('카카오 로그인에 실패했습니다. 다시 시도해주세요.');
          break;
        default:
          setError('로그인 중 오류가 발생했습니다.');
      }
    }

    if (loginSuccess === 'success') {
      // 로그인 성공 시 메인 페이지로 리다이렉트
      window.location.href = '/';
    }
  }, []);

  // 카카오 로그인 코드 처리
  const handleKakaoCode = async (code) => {
    try {
      setIsKakaoLoading(true);
      setError('');

      console.log('카카오 인증 코드 처리 시작:', code);

      // 백엔드 API로 카카오 인증 코드 전송
      const result = await handleKakaoCallback(code);

      if (result.success) {
        console.log('카카오 로그인 성공:', result.data);
        alert('로그인이 성공적으로 완료되었습니다!');
        
        // 메인 페이지로 리다이렉트
        window.location.href = '/?login=success';
      } else {
        setError(result.error || '카카오 로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('카카오 로그인 처리 실패:', error);
      setError('카카오 로그인 처리 중 오류가 발생했습니다.');
    } finally {
      setIsKakaoLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: 실제 로그인 API 연동
    console.log("로그인 시도:", formData);

    // 임시 딜레이
    setTimeout(() => {
      setIsLoading(false);
      alert("로그인 기능은 추후 구현 예정입니다.");
    }, 1000);
  };

  const handleKakaoLogin = async () => {
    try {
      setIsKakaoLoading(true);
      setError("");
      
      // 카카오 로그인 시작
      initiateKakaoLogin();
    } catch (error) {
      console.error('카카오 로그인 에러:', error);
      setError('카카오 로그인 요청 중 오류가 발생했습니다.');
      setIsKakaoLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    if (provider === "Kakao") {
      handleKakaoLogin();
    } else {
      // 다른 소셜 로그인은 추후 구현
      console.log(`${provider} 로그인 시도`);
      alert(`${provider} 로그인 기능은 추후 구현 예정입니다.`);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 로그인 카드 */}
            <div className="card-light dark:card-dark p-8">
              {/* 헤더 */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  로그인
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  WithUp에 오신 것을 환영합니다
                </p>
              </div>

              {/* 로딩 메시지 */}
              {isKakaoLoading && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    카카오 로그인 처리 중...
                  </div>
                </div>
              )}

              {/* 에러 메시지 */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              {/* 로그인 폼 */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 이메일 */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 비밀번호 */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    비밀번호
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors pr-12"
                      placeholder="비밀번호를 입력하세요"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      aria-label={
                        showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                      }
                    >
                      {showPassword ? (
                        // 눈 감기 아이콘
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        // 눈 뜨기 아이콘
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* 옵션 */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary"
                    />
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      로그인 상태 유지
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    비밀번호 찾기
                  </Link>
                </div>

                {/* 로그인 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? "로그인 중..." : "로그인"}
                </motion.button>
              </form>

              {/* 구분선 */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-dark-secondary text-gray-500 dark:text-gray-400">
                    또는
                  </span>
                </div>
              </div>

              {/* 소셜 로그인 */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Google")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Google로 계속하기
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("Kakao")}
                  disabled={isKakaoLoading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#FEE500] hover:bg-[#FDD835] disabled:bg-[#F5F5F5] disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      d="M12 3C6.477 3 2 6.477 2 10.79c0 2.827 1.88 5.302 4.701 6.68-.194.716-.636 2.367-.735 2.734-.118.444.164.438.345.318.144-.096 2.318-1.577 3.188-2.169.498.068 1.009.103 1.501.103 5.523 0 10-3.477 10-7.79C22 6.477 17.523 3 12 3z"
                    />
                  </svg>
                  <span className="text-[#000000] font-medium">
                    {isKakaoLoading ? "카카오 로그인 중..." : "카카오로 계속하기"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("Naver")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#03C75A] hover:bg-[#02B350] text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                  </svg>
                  <span className="font-medium">네이버로 계속하기</span>
                </button>
              </div>

              {/* 회원가입 링크 */}
              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                아직 회원이 아니신가요?{" "}
                <Link
                  href="/signup"
                  className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                >
                  회원가입
                </Link>
              </div>
            </div>

            {/* 추가 정보 */}
            <motion.div
              className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p>로그인하시면 WithUp의</p>
              <p className="mt-1">
                <Link
                  href="/terms"
                  className="hover:text-primary-500 transition-colors"
                >
                  이용약관
                </Link>
                {" 및 "}
                <Link
                  href="/privacy"
                  className="hover:text-primary-500 transition-colors"
                >
                  개인정보처리방침
                </Link>
                에 동의하게 됩니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

