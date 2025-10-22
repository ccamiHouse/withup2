"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState("시작하기");

  const categories = [
    "시작하기",
    "스터디 찾기",
    "스터디 개설",
    "스터디 관리",
    "사이드잡",
    "계정 설정",
  ];

  const helpContent = {
    시작하기: [
      {
        title: "WithUp이란?",
        content:
          "WithUp은 함께 성장하는 스터디 모임 플랫폼입니다. 원하는 주제, 지역, 기간으로 스터디를 찾고, 학습 경험을 사이드잡으로 연결할 수 있습니다.",
        icon: "🎯",
      },
      {
        title: "회원가입 방법",
        content:
          "1. 상단의 '로그인' 버튼 클릭\n2. '회원가입' 링크 클릭\n3. 이메일 또는 소셜 계정으로 가입\n4. 필수 약관 동의 후 가입 완료",
        icon: "✍️",
      },
      {
        title: "프로필 설정",
        content:
          "마이페이지에서 프로필 사진, 자기소개, 관심 분야 등을 설정할 수 있습니다. 자세한 프로필은 스터디 매칭률을 높여줍니다.",
        icon: "👤",
      },
    ],
    "스터디 찾기": [
      {
        title: "스터디 검색하기",
        content:
          "상단 메뉴의 '스터디 찾기'를 클릭하면 다양한 스터디를 볼 수 있습니다. 카테고리, 지역, 온라인/오프라인 등의 필터로 원하는 스터디를 찾아보세요.",
        icon: "🔍",
      },
      {
        title: "스터디 참여 신청",
        content:
          "관심 있는 스터디의 상세 페이지에서 '참여하기' 버튼을 클릭하세요. 스터디장의 승인 후 참여할 수 있습니다.",
        icon: "🙋",
      },
      {
        title: "알림 설정",
        content:
          "원하는 조건의 스터디가 개설되면 알림을 받을 수 있습니다. 마이페이지에서 알림 설정을 활성화하세요.",
        icon: "🔔",
      },
    ],
    "스터디 개설": [
      {
        title: "스터디 개설 방법",
        content:
          "1. 상단 메뉴의 '스터디 개설' 클릭\n2. 스터디 정보 입력 (제목, 설명, 카테고리)\n3. 모집 인원, 지역, 기간 설정\n4. 개설 완료 후 모집 시작",
        icon: "📝",
      },
      {
        title: "좋은 스터디 만들기 팁",
        content:
          "• 명확한 목표와 일정 제시\n• 구체적인 스터디 방식 설명\n• 예상 커리큘럼 공유\n• 참여 조건 명시",
        icon: "💡",
      },
      {
        title: "모집 관리",
        content:
          "마이페이지의 '개설 스터디' 탭에서 신청자를 확인하고 승인/거절할 수 있습니다.",
        icon: "✅",
      },
    ],
    "스터디 관리": [
      {
        title: "출석 체크",
        content:
          "스터디 상세 페이지에서 출석 체크 기능을 사용할 수 있습니다. 참여율을 확인하고 관리하세요.",
        icon: "📋",
      },
      {
        title: "일정 관리",
        content:
          "스터디 캘린더에서 다음 모임 일정을 등록하고, 멤버들에게 자동으로 알림이 발송됩니다.",
        icon: "📅",
      },
      {
        title: "공지사항 작성",
        content:
          "중요한 내용은 공지사항으로 작성하면 모든 멤버에게 푸시 알림이 전송됩니다.",
        icon: "📢",
      },
      {
        title: "역할 분담",
        content:
          "팀장, 서기, 발표자 등 역할을 지정하여 효율적으로 스터디를 운영할 수 있습니다.",
        icon: "👥",
      },
    ],
    사이드잡: [
      {
        title: "사이드잡이란?",
        content:
          "스터디 활동을 통해 쌓은 경험과 지식을 바탕으로 튜터링, 강의, 멘토링 등의 부업 기회를 제공받을 수 있습니다.",
        icon: "💼",
      },
      {
        title: "사이드잡 제안 받기",
        content:
          "활발한 스터디 활동과 높은 평점을 유지하면 관련 분야의 사이드잡 제안을 받을 수 있습니다.",
        icon: "📬",
      },
      {
        title: "지원하기",
        content:
          "마이페이지의 '사이드잡' 탭에서 받은 제안을 확인하고, 관심 있는 기회에 지원할 수 있습니다.",
        icon: "✉️",
      },
    ],
    "계정 설정": [
      {
        title: "비밀번호 변경",
        content:
          "마이페이지 > 설정 > 비밀번호 변경에서 새로운 비밀번호로 변경할 수 있습니다.",
        icon: "🔒",
      },
      {
        title: "알림 설정",
        content:
          "이메일, 푸시 알림 등 다양한 알림 옵션을 마이페이지에서 설정할 수 있습니다.",
        icon: "🔔",
      },
      {
        title: "회원 탈퇴",
        content:
          "마이페이지 > 설정 > 회원 탈퇴에서 탈퇴할 수 있습니다. 탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.",
        icon: "🚪",
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary-500"
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
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              도움말
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              WithUp 사용 방법을 확인하세요
            </p>
          </motion.div>

          {/* 빠른 링크 */}
          <motion.div
            className="grid md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/faq"
              className="card-light dark:card-dark p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">❓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    자주 묻는 질문
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    FAQ 바로가기
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="card-light dark:card-dark p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    문의하기
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    1:1 문의 접수
                  </p>
                </div>
              </div>
            </Link>

            <a
              href="mailto:support@withup.com"
              className="card-light dark:card-dark p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    이메일 문의
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    support@withup.com
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 콘텐츠 영역 */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* 카테고리 사이드바 */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-light dark:card-dark p-4 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  카테고리
                </h3>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category
                          ? "bg-primary-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* 콘텐츠 */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              key={activeCategory}
            >
              <div className="card-light dark:card-dark p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {activeCategory}
                </h2>

                <div className="space-y-6">
                  {helpContent[activeCategory].map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-dark-tertiary rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 추가 도움 */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-light dark:card-dark p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                원하는 답을 찾지 못하셨나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                더 자세한 도움이 필요하시면 문의해 주세요.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/faq"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                >
                  FAQ 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  문의하기
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

