"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudyCard from "@/components/StudyCard";
import Link from "next/link";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState("joined");

  // 임시 사용자 데이터
  const user = {
    name: "김스터디",
    email: "study@example.com",
    joinedDate: "2025-01-01",
    studyCount: 3,
  };

  // 참여 중인 스터디
  const joinedStudies = [
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
  ];

  // 개설한 스터디
  const createdStudies = [
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
  ];

  // 사이드잡 제안
  const sideJobs = [
    {
      id: 1,
      title: "토익 과외 선생님 모집",
      description: "토익 700~800점대 학생 대상 과외",
      pay: "시간당 3만원",
      type: "튜터링",
    },
    {
      id: 2,
      title: "파이썬 강의 보조",
      description: "온라인 파이썬 강의 질의응답 보조",
      pay: "월 50만원",
      type: "강의",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-dark-primary py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Profile Section */}
          <div className="card-light dark:card-dark p-8 mb-6">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mr-6">
                {user.name[0]}
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {user.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  가입일: {user.joinedDate}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">
                  {user.studyCount}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  참여 스터디
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary-500">
                  {createdStudies.length}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  개설 스터디
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-500">
                  {sideJobs.length}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  사이드잡 제안
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="card-light dark:card-dark">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("joined")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "joined"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  참여 스터디 ({joinedStudies.length})
                </button>
                <button
                  onClick={() => setActiveTab("created")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "created"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  개설 스터디 ({createdStudies.length})
                </button>
                <button
                  onClick={() => setActiveTab("sidejobs")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "sidejobs"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  사이드잡 ({sideJobs.length})
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === "joined" && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    참여 중인 스터디
                  </h2>
                  {joinedStudies.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {joinedStudies.map((study) => (
                        <StudyCard key={study.id} study={study} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        참여 중인 스터디가 없습니다
                      </p>
                      <Link
                        href="/studies"
                        className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                      >
                        스터디 찾아보기 →
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "created" && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    개설한 스터디
                  </h2>
                  {createdStudies.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {createdStudies.map((study) => (
                        <StudyCard key={study.id} study={study} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        개설한 스터디가 없습니다
                      </p>
                      <Link
                        href="/studies/create"
                        className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
                      >
                        스터디 개설하기 →
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "sidejobs" && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    사이드잡 제안
                  </h2>
                  {sideJobs.length > 0 ? (
                    <div className="space-y-4">
                      {sideJobs.map((job) => (
                        <div
                          key={job.id}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 text-sm font-semibold px-3 py-1 rounded-full">
                                {job.type}
                              </span>
                              <h3 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-white">
                                {job.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-3">
                                {job.description}
                              </p>
                              <p className="text-primary-500 font-semibold">
                                {job.pay}
                              </p>
                            </div>
                            <button className="pill-button bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50">
                              지원하기
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        현재 받은 사이드잡 제안이 없습니다
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
