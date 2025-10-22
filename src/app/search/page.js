"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudyCard from "@/components/StudyCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  // TODO: 실제로는 API에서 검색 결과를 가져와야 함
  const allStudies = [
    {
      id: 1,
      title: "토익 900점 달성 스터디",
      description: "3개월 안에 토익 900점을 목표로 하는 스터디입니다.",
      category: "어학",
      location: "강남구",
      period: "3개월",
      currentMembers: 3,
      maxMembers: 5,
      isOnline: false,
    },
    {
      id: 2,
      title: "파이썬 웹 개발 스터디",
      description: "Django를 활용한 웹 개발 프로젝트 스터디",
      category: "개발",
      location: "서초구",
      period: "2개월",
      currentMembers: 4,
      maxMembers: 6,
      isOnline: true,
    },
    {
      id: 3,
      title: "공기업 NCS 준비반",
      description: "NCS 시험 대비 문제 풀이 및 스터디",
      category: "취업",
      location: "마포구",
      period: "2개월",
      currentMembers: 2,
      maxMembers: 5,
      isOnline: false,
    },
    {
      id: 4,
      title: "자바스크립트 마스터 코스",
      description: "바닐라 JS부터 React까지 완벽 정복",
      category: "개발",
      location: "판교",
      period: "4개월",
      currentMembers: 5,
      maxMembers: 8,
      isOnline: true,
    },
    {
      id: 5,
      title: "토익 스피킹 레벨7 달성",
      description: "토익 스피킹 실전 연습 스터디",
      category: "어학",
      location: "강남구",
      period: "2개월",
      currentMembers: 4,
      maxMembers: 6,
      isOnline: false,
    },
  ];

  // 검색어로 필터링
  const filteredStudies = allStudies.filter((study) => {
    const searchLower = query.toLowerCase();
    const matchQuery =
      study.title.toLowerCase().includes(searchLower) ||
      study.description.toLowerCase().includes(searchLower) ||
      study.category.toLowerCase().includes(searchLower);
    
    if (activeTab === "all") return matchQuery;
    return matchQuery && study.category === activeTab;
  });

  // 정렬
  const sortedStudies = [...filteredStudies].sort((a, b) => {
    if (sortBy === "latest") {
      return b.id - a.id;
    } else if (sortBy === "popular") {
      return b.currentMembers - a.currentMembers;
    }
    return 0; // relevance - 기본 순서 유지
  });

  const tabs = [
    { id: "all", label: "전체", count: filteredStudies.length },
    {
      id: "개발",
      label: "개발",
      count: filteredStudies.filter((s) => s.category === "개발").length,
    },
    {
      id: "어학",
      label: "어학",
      count: filteredStudies.filter((s) => s.category === "어학").length,
    },
    {
      id: "취업",
      label: "취업",
      count: filteredStudies.filter((s) => s.category === "취업").length,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* 검색 헤더 */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              검색 결과
            </h1>
            {query && (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                '<span className="text-primary-500 font-semibold">{query}</span>
                '에 대한 검색 결과{" "}
                <span className="font-semibold">
                  {sortedStudies.length}개
                </span>
              </p>
            )}
          </motion.div>

          {/* 필터 & 정렬 */}
          <motion.div
            className="card-light dark:card-dark p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* 카테고리 탭 */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 dark:bg-dark-tertiary text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab.label}{" "}
                    {tab.count > 0 && (
                      <span className="ml-1">({tab.count})</span>
                    )}
                  </button>
                ))}
              </div>

              {/* 정렬 */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  정렬:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors text-sm"
                >
                  <option value="relevance">관련도순</option>
                  <option value="latest">최신순</option>
                  <option value="popular">인기순</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* 검색 결과 */}
          {sortedStudies.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {sortedStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <StudyCard study={study} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="card-light dark:card-dark p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg
                className="w-20 h-20 text-gray-400 mx-auto mb-6"
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                검색 결과가 없습니다
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {query ? (
                  <>
                    '<span className="font-semibold">{query}</span>'에 대한
                    검색 결과가 없습니다.
                    <br />
                    다른 검색어를 입력하거나 필터를 변경해보세요.
                  </>
                ) : (
                  <>
                    검색어를 입력해주세요.
                  </>
                )}
              </p>

              {/* 추천 검색어 */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  추천 검색어
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["토익", "개발", "파이썬", "자바", "취업"].map((keyword) => (
                    <Link
                      key={keyword}
                      href={`/search?q=${keyword}`}
                      className="px-4 py-2 bg-gray-100 dark:bg-dark-tertiary text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 transition-colors text-sm"
                    >
                      #{keyword}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/studies"
                className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                전체 스터디 보기
              </Link>
            </motion.div>
          )}

          {/* 검색 팁 */}
          {sortedStudies.length > 0 && (
            <motion.div
              className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex gap-3">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
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
                  <p className="font-semibold mb-2">검색 팁</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>카테고리를 선택하면 더 정확한 결과를 볼 수 있습니다</li>
                    <li>여러 단어로 검색하면 더 많은 결과를 찾을 수 있습니다</li>
                    <li>온라인/오프라인, 지역 등으로 필터링해보세요</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

