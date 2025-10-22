"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);

  const categories = [
    "회원가입/로그인",
    "스터디 참여",
    "스터디 개설/운영",
    "사이드잡",
    "결제/환불",
    "신고",
    "기타",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 크기 체크 (10MB 제한)
      if (file.size > 10 * 1024 * 1024) {
        alert("파일 크기는 10MB를 초과할 수 없습니다.");
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: 실제 API 호출
    console.log("문의 데이터:", {
      ...formData,
      file: attachedFile?.name,
    });

    setTimeout(() => {
      setIsLoading(false);
      alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
      });
      setAttachedFile(null);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-accent-500"
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              문의하기
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              궁금하신 점이나 불편사항을 알려주세요
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 연락처 정보 */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* 빠른 도움말 */}
              <div className="card-light dark:card-dark p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  빠른 도움말
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/help"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>도움말 센터</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>자주 묻는 질문</span>
                  </Link>
                </div>
              </div>

              {/* 연락 정보 */}
              <div className="card-light dark:card-dark p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  연락처
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
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
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        이메일
                      </p>
                      <a
                        href="mailto:support@withup.com"
                        className="text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
                      >
                        support@withup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        전화
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        02-1234-5678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        운영 시간
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        평일 09:00 - 18:00
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        (주말 및 공휴일 제외)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 안내 사항 */}
              <div className="card-light dark:card-dark p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-semibold mb-2">문의 전 확인해주세요</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>FAQ에서 답변을 찾아보세요</li>
                      <li>답변은 영업일 기준 1~2일 소요</li>
                      <li>상세한 내용 작성 시 빠른 처리</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 문의 폼 */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-light dark:card-dark p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  문의 작성
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 이름 & 이메일 */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  {/* 문의 유형 */}
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                    >
                      <option value="">선택해주세요</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 제목 */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      제목 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>

                  {/* 문의 내용 */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors resize-none"
                      placeholder="문의 내용을 자세히 작성해주세요. 스크린샷이나 오류 메시지를 함께 보내주시면 더 빠르게 도움드릴 수 있습니다."
                      minLength={20}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length} / 최소 20자
                    </p>
                  </div>

                  {/* 파일 첨부 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      파일 첨부 (선택)
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex-1 cursor-pointer">
                        <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-500 transition-colors text-center">
                          <svg
                            className="w-8 h-8 mx-auto mb-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                          </svg>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {attachedFile
                              ? attachedFile.name
                              : "스크린샷 또는 파일을 첨부하세요"}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            이미지, PDF, 문서 파일 (최대 10MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept="image/*,.pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* 개인정보 수집 동의 */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 text-primary-500 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-dark-secondary mt-0.5"
                      />
                      <div className="flex-1 text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          개인정보 수집 및 이용 동의{" "}
                          <span className="text-red-500">*</span>
                        </span>
                        <p className="mt-1">
                          문의 처리를 위해 이름, 이메일 등 개인정보를
                          수집합니다. 수집된 정보는 문의 답변 후 파기됩니다.
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* 제출 버튼 */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? "전송 중..." : "문의 접수"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

