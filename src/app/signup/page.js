"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 비밀번호 강도 체크
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  // 비밀번호 강도 체크
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  // 약관 동의 체크
  const handleAgreementChange = (name) => {
    if (name === "all") {
      const newValue = !agreements.all;
      setAgreements({
        all: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
      });
    } else {
      const newAgreements = {
        ...agreements,
        [name]: !agreements[name],
      };
      newAgreements.all =
        newAgreements.terms &&
        newAgreements.privacy &&
        newAgreements.marketing;
      setAgreements(newAgreements);
    }
  };

  // 회원가입 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!agreements.terms || !agreements.privacy) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (formData.password.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    setIsLoading(true);

    // TODO: 실제 API 호출
    console.log("회원가입 데이터:", {
      ...formData,
      agreements,
    });

    setTimeout(() => {
      setIsLoading(false);
      alert("회원가입이 완료되었습니다!");
      // TODO: 로그인 페이지로 이동 또는 자동 로그인
      window.location.href = "/login";
    }, 1500);
  };

  // 소셜 회원가입
  const handleSocialSignup = (provider) => {
    console.log(`${provider} 회원가입 시도`);
    alert(`${provider} 회원가입 기능은 추후 구현 예정입니다.`);
  };

  // 비밀번호 강도 표시
  const getStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength <= 2) return "약함";
    if (passwordStrength <= 3) return "보통";
    return "강함";
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 회원가입 카드 */}
            <div className="card-light dark:card-dark p-8">
              {/* 헤더 */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  회원가입
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  WithUp과 함께 성장하는 스터디를 시작하세요
                </p>
              </div>

              {/* 소셜 회원가입 */}
              <div className="space-y-3 mb-8">
                <button
                  type="button"
                  onClick={() => handleSocialSignup("Google")}
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
                    Google로 회원가입
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialSignup("Kakao")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#FEE500] hover:bg-[#FDD835] rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      d="M12 3C6.477 3 2 6.477 2 10.79c0 2.827 1.88 5.302 4.701 6.68-.194.716-.636 2.367-.735 2.734-.118.444.164.438.345.318.144-.096 2.318-1.577 3.188-2.169.498.068 1.009.103 1.501.103 5.523 0 10-3.477 10-7.79C22 6.477 17.523 3 12 3z"
                    />
                  </svg>
                  <span className="text-[#000000] font-medium">
                    카카오로 회원가입
                  </span>
                </button>
              </div>

              {/* 구분선 */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-dark-secondary text-gray-500 dark:text-gray-400">
                    또는 이메일로 회원가입
                  </span>
                </div>
              </div>

              {/* 회원가입 폼 */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 이름 */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="홍길동"
                    />
                  </div>

                  {/* 전화번호 */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      전화번호
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    이메일 <span className="text-red-500">*</span>
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
                    비밀번호 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors pr-12"
                      placeholder="8자 이상 입력"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                    >
                      {showPassword ? (
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
                  {/* 비밀번호 강도 표시 */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded ${
                              level <= passwordStrength
                                ? getStrengthColor()
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      {getStrengthText() && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          비밀번호 강도: {getStrengthText()}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 비밀번호 확인 */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    비밀번호 확인 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors pr-12"
                      placeholder="비밀번호 재입력"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                    >
                      {showConfirmPassword ? (
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
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-sm text-red-500 mt-1">
                        비밀번호가 일치하지 않습니다.
                      </p>
                    )}
                </div>

                {/* 약관 동의 */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-3">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreements.all}
                      onChange={() => handleAgreementChange("all")}
                      className="w-5 h-5 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary"
                    />
                    <span className="ml-3 font-semibold text-gray-900 dark:text-white">
                      전체 동의
                    </span>
                  </label>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-2">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={agreements.terms}
                          onChange={() => handleAgreementChange("terms")}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary"
                        />
                        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                          이용약관 동의 <span className="text-red-500">*</span>
                        </span>
                      </div>
                      <Link
                        href="/terms"
                        className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        보기
                      </Link>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={agreements.privacy}
                          onChange={() => handleAgreementChange("privacy")}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary"
                        />
                        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                          개인정보처리방침 동의{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </div>
                      <Link
                        href="/privacy"
                        className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        보기
                      </Link>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={agreements.marketing}
                          onChange={() => handleAgreementChange("marketing")}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary"
                        />
                        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                          마케팅 정보 수신 동의 (선택)
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 회원가입 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? "가입 처리 중..." : "회원가입"}
                </motion.button>
              </form>

              {/* 로그인 링크 */}
              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                이미 계정이 있으신가요?{" "}
                <Link
                  href="/login"
                  className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                >
                  로그인
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

