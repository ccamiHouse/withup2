"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1); // 1: 이메일 입력, 2: 인증코드 입력, 3: 새 비밀번호 설정, 4: 완료
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(180); // 3분 타이머

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 1: 이메일 제출
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: 실제 API 호출 - 이메일로 인증코드 발송
    console.log("인증코드 발송:", formData.email);

    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      // 타이머 시작
      startTimer();
    }, 1000);
  };

  // Step 2: 인증코드 확인
  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: 실제 API 호출 - 인증코드 확인
    console.log("인증코드 확인:", formData.verificationCode);

    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1000);
  };

  // Step 3: 새 비밀번호 설정
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (formData.newPassword.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    setIsLoading(true);

    // TODO: 실제 API 호출 - 비밀번호 재설정
    console.log("비밀번호 재설정:", formData.newPassword);

    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 1000);
  };

  // 인증코드 재발송
  const handleResendCode = () => {
    console.log("인증코드 재발송");
    setTimer(180);
    startTimer();
    alert("인증코드가 재발송되었습니다.");
  };

  // 타이머 시작
  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 타이머 표시 형식
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
            {/* 진행 단계 표시 */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step >= num
                          ? "bg-primary-500 text-white"
                          : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {num}
                    </div>
                    {num < 4 && (
                      <div
                        className={`h-1 w-16 mx-2 ${
                          step > num
                            ? "bg-primary-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
                <span>이메일</span>
                <span>인증</span>
                <span>비밀번호</span>
                <span>완료</span>
              </div>
            </div>

            {/* 카드 */}
            <div className="card-light dark:card-dark p-8">
              {/* Step 1: 이메일 입력 */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      비밀번호 찾기
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      가입하신 이메일을 입력해주세요.
                      <br />
                      인증코드를 발송해드립니다.
                    </p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
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

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? "발송 중..." : "인증코드 발송"}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step 2: 인증코드 입력 */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-secondary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      인증코드 입력
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <span className="font-semibold">{formData.email}</span>
                      <br />
                      으로 발송된 인증코드를 입력해주세요.
                    </p>
                  </div>

                  <form onSubmit={handleVerificationSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="verificationCode"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        인증코드
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="verificationCode"
                          name="verificationCode"
                          value={formData.verificationCode}
                          onChange={handleChange}
                          required
                          maxLength={6}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                          placeholder="6자리 숫자"
                        />
                        {timer > 0 && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary-500">
                            {formatTime(timer)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">
                        코드를 받지 못하셨나요?
                      </span>
                      <button
                        type="button"
                        onClick={handleResendCode}
                        className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                      >
                        재발송
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? "확인 중..." : "인증하기"}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step 3: 새 비밀번호 설정 */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-accent-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      새 비밀번호 설정
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      새로운 비밀번호를 입력해주세요.
                    </p>
                  </div>

                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        새 비밀번호
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
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
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        비밀번호 확인
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
                        formData.newPassword !== formData.confirmPassword && (
                          <p className="text-sm text-red-500 mt-1">
                            비밀번호가 일치하지 않습니다.
                          </p>
                        )}
                    </div>

                    <div className="bg-gray-50 dark:bg-dark-tertiary p-4 rounded-lg text-sm">
                      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        비밀번호 조건:
                      </p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              formData.newPassword.length >= 8
                                ? "text-green-500"
                                : ""
                            }
                          >
                            •
                          </span>
                          최소 8자 이상
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /[A-Z]/.test(formData.newPassword)
                                ? "text-green-500"
                                : ""
                            }
                          >
                            •
                          </span>
                          영문 대문자 포함 권장
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /[0-9]/.test(formData.newPassword)
                                ? "text-green-500"
                                : ""
                            }
                          >
                            •
                          </span>
                          숫자 포함 권장
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /[!@#$%^&*]/.test(formData.newPassword)
                                ? "text-green-500"
                                : ""
                            }
                          >
                            •
                          </span>
                          특수문자 포함 권장
                        </li>
                      </ul>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? "변경 중..." : "비밀번호 변경"}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step 4: 완료 */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    비밀번호 변경 완료!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    비밀번호가 성공적으로 변경되었습니다.
                    <br />
                    새로운 비밀번호로 로그인해주세요.
                  </p>
                  <Link
                    href="/login"
                    className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    로그인하러 가기
                  </Link>
                </motion.div>
              )}

              {/* 로그인 링크 (완료 단계 제외) */}
              {step < 4 && (
                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                  비밀번호가 기억나셨나요?{" "}
                  <Link
                    href="/login"
                    className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                  >
                    로그인
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

