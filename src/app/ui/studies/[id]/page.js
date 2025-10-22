"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoiceButton from "@/components/VoiceButton";
import VoiceMessageCard from "@/components/VoiceMessageCard";
import { useParams, useRouter } from "next/navigation";

export default function StudyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("info");

  // 임시 스터디 데이터
  const study = {
    id: params.id,
    title: "토익 900점 달성 스터디",
    description:
      "3개월 안에 토익 900점을 목표로 하는 스터디입니다. 매주 2회 모여서 문제 풀이와 단어 암기를 함께 합니다.",
    category: "어학",
    location: "강남구",
    period: "3개월",
    startDate: "2025-11-01",
    currentMembers: 3,
    maxMembers: 5,
    isOnline: false,
    leader: {
      name: "김스터디",
      role: "리더",
    },
    members: [
      { name: "이공부", role: "멤버" },
      { name: "박열심", role: "서기" },
      { name: "최노력", role: "멤버" },
    ],
  };

  // 임시 음성 메시지 데이터
  const voiceMessages = [
    {
      id: 1,
      sender: "김스터디",
      duration: 120,
      timestamp: "2024-12-19 14:30",
      isOwn: false,
    },
    {
      id: 2,
      sender: "이공부",
      duration: 90,
      timestamp: "2024-12-19 15:15",
      isOwn: true,
    },
  ];

  const handleJoin = () => {
    // TODO: API 호출로 스터디 참여
    alert("스터디 참여 신청이 완료되었습니다!");
    router.push("/my-page");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-dark-primary py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="card-light dark:card-dark p-8 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold px-3 py-1 rounded-full">
                  {study.category}
                </span>
                {study.isOnline && (
                  <span className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-sm font-semibold px-3 py-1 rounded-full">
                    온라인
                  </span>
                )}
              </div>
              <button
                onClick={handleJoin}
                className="pill-button bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                참여하기
              </button>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {study.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {study.location}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {study.period}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                시작일: {study.startDate}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {study.currentMembers} / {study.maxMembers}명
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-primary-500 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (study.currentMembers / study.maxMembers) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {study.maxMembers - study.currentMembers}명 더 모집 중
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="card-light dark:card-dark">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "info"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  스터디 정보
                </button>
                <button
                  onClick={() => setActiveTab("members")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "members"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  멤버 ({study.currentMembers})
                </button>
                <button
                  onClick={() => setActiveTab("voice")}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === "voice"
                      ? "border-b-2 border-primary-500 text-primary-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  }`}
                >
                  음성 메시지
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === "info" && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    스터디 소개
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {study.description}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      리더 정보
                    </h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {study.leader.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.leader.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {study.leader.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "members" && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    스터디 멤버
                  </h2>
                  <div className="space-y-4">
                    {/* Leader */}
                    <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {study.leader.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.leader.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {study.leader.role}
                        </p>
                      </div>
                    </div>

                    {/* Members */}
                    {study.members.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {member.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {member.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "voice" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      음성 메시지
                    </h2>
                    <VoiceButton size="default" />
                  </div>

                  <div className="space-y-4">
                    {voiceMessages.map((message) => (
                      <VoiceMessageCard key={message.id} message={message} />
                    ))}
                  </div>
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
