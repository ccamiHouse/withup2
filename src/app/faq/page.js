"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["전체", "회원가입", "스터디", "사이드잡", "결제", "기타"];

  const faqData = [
    {
      category: "회원가입",
      question: "회원가입은 무료인가요?",
      answer:
        "네, WithUp의 회원가입은 완전히 무료입니다. 스터디 참여와 개설 모두 무료로 이용하실 수 있습니다.",
    },
    {
      category: "회원가입",
      question: "소셜 로그인으로 가입할 수 있나요?",
      answer:
        "네, Google, 카카오, 네이버 계정으로 간편하게 가입하실 수 있습니다. 상단의 '로그인' 버튼을 클릭하시면 소셜 로그인 옵션을 확인하실 수 있습니다.",
    },
    {
      category: "회원가입",
      question: "비밀번호를 잊어버렸어요.",
      answer:
        "로그인 페이지의 '비밀번호 찾기'를 클릭하시면 가입하신 이메일로 인증코드가 발송됩니다. 인증 후 새로운 비밀번호를 설정하실 수 있습니다.",
    },
    {
      category: "스터디",
      question: "스터디는 어떻게 찾나요?",
      answer:
        "상단 메뉴의 '스터디 찾기'를 클릭하시면 다양한 스터디를 볼 수 있습니다. 카테고리, 지역, 온라인/오프라인, 기간 등의 필터를 활용하여 원하는 스터디를 찾으실 수 있습니다.",
    },
    {
      category: "스터디",
      question: "스터디 참여 신청은 어떻게 하나요?",
      answer:
        "관심 있는 스터디의 상세 페이지에서 '참여하기' 버튼을 클릭하세요. 스터디장이 신청을 승인하면 스터디에 참여할 수 있습니다. 승인 결과는 알림과 이메일로 안내드립니다.",
    },
    {
      category: "스터디",
      question: "스터디를 개설하려면 어떻게 해야 하나요?",
      answer:
        "상단 메뉴의 '스터디 개설'을 클릭하여 스터디 정보(제목, 설명, 카테고리, 인원, 지역, 기간 등)를 입력하시면 바로 개설할 수 있습니다. 개설 후에는 마이페이지에서 신청자를 관리할 수 있습니다.",
    },
    {
      category: "스터디",
      question: "한 번에 여러 스터디에 참여할 수 있나요?",
      answer:
        "네, 동시에 여러 스터디에 참여하실 수 있습니다. 다만 각 스터디의 일정과 활동량을 고려하여 무리하지 않는 선에서 참여하시는 것을 권장합니다.",
    },
    {
      category: "스터디",
      question: "스터디에서 탈퇴하고 싶어요.",
      answer:
        "스터디 상세 페이지의 '스터디 탈퇴' 버튼을 클릭하시면 탈퇴할 수 있습니다. 다만 탈퇴 시 해당 스터디의 모든 활동 기록이 삭제되며, 진행 중인 사이드잡 제안에 영향을 줄 수 있습니다.",
    },
    {
      category: "사이드잡",
      question: "사이드잡은 무엇인가요?",
      answer:
        "사이드잡은 스터디 활동을 통해 쌓은 경험과 지식을 바탕으로 튜터링, 강의, 멘토링 등의 부업 기회를 제공받을 수 있는 서비스입니다. WithUp과 제휴된 기업 및 교육 기관에서 제안을 드립니다.",
    },
    {
      category: "사이드잡",
      question: "사이드잡 제안은 어떻게 받을 수 있나요?",
      answer:
        "활발한 스터디 활동, 높은 출석률, 좋은 평가를 받으면 해당 분야의 사이드잡 제안을 받을 수 있습니다. 제안은 마이페이지의 '사이드잡' 탭에서 확인하실 수 있습니다.",
    },
    {
      category: "사이드잡",
      question: "사이드잡에 지원했는데 결과는 언제 나오나요?",
      answer:
        "일반적으로 지원 후 3~5일 이내에 이메일로 결과를 안내드립니다. 경우에 따라 추가 면접이나 서류 제출이 필요할 수 있습니다.",
    },
    {
      category: "결제",
      question: "WithUp 서비스 이용료가 있나요?",
      answer:
        "기본적인 스터디 찾기, 개설, 참여 기능은 모두 무료입니다. 다만 일부 프리미엄 기능(광고 없는 경험, 우선 매칭 등)은 향후 유료로 제공될 예정입니다.",
    },
    {
      category: "결제",
      question: "환불 정책은 어떻게 되나요?",
      answer:
        "현재 무료 서비스를 제공하고 있어 환불 정책이 적용되지 않습니다. 향후 유료 서비스 도입 시 명확한 환불 정책을 안내드리겠습니다.",
    },
    {
      category: "기타",
      question: "출석 체크는 어떻게 하나요?",
      answer:
        "스터디장은 스터디 상세 페이지에서 '출석 체크' 기능을 통해 참여자들의 출석을 관리할 수 있습니다. 참여자는 QR 코드 스캔 또는 체크인 버튼으로 출석을 확인할 수 있습니다.",
    },
    {
      category: "기타",
      question: "알림을 받고 싶지 않아요.",
      answer:
        "마이페이지 > 설정 > 알림 설정에서 원하는 알림만 선택적으로 받을 수 있습니다. 이메일, 푸시 알림, SMS 등을 개별적으로 설정하실 수 있습니다.",
    },
    {
      category: "기타",
      question: "개인정보는 어떻게 보호되나요?",
      answer:
        "WithUp은 개인정보보호법에 따라 회원님의 개인정보를 안전하게 관리합니다. 자세한 내용은 개인정보처리방침을 참고해주세요.",
    },
    {
      category: "기타",
      question: "신고는 어떻게 하나요?",
      answer:
        "부적절한 게시물이나 행동을 발견하시면 해당 콘텐츠의 '신고하기' 버튼을 클릭하거나 고객센터를 통해 신고하실 수 있습니다. 신고 내용은 검토 후 조치됩니다.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchCategory =
      activeCategory === "전체" || faq.category === activeCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-secondary-500"
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
              자주 묻는 질문
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              궁금하신 내용을 빠르게 찾아보세요
            </p>
          </motion.div>

          {/* 검색 */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="궁금한 내용을 검색해보세요..."
                className="w-full px-6 py-4 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* 카테고리 필터 */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary-500 text-white"
                      : "bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary border border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ 목록 */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-light dark:card-dark overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                  >
                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mb-2">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Q. {faq.question}
                      </h3>
                    </div>
                    <motion.svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  검색 결과가 없습니다
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  다른 검색어나 카테고리를 선택해보세요
                </p>
              </div>
            )}
          </motion.div>

          {/* 추가 도움 */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-light dark:card-dark p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                원하는 답을 찾지 못하셨나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                추가 문의사항이 있으시면 언제든지 연락 주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/help"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                >
                  도움말 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  1:1 문의하기
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

