"use client";

import { useState } from "react";
import { 
  MapPin, BookOpen, Users, Award, TrendingUp, Calendar,
  Search, Plus, Bell, User, LogOut, Settings
} from "lucide-react";
import Link from "next/link";

export default function LoggedInHome() {
  const [activeTab, setActiveTab] = useState("my-studies");

  // Mock data
  const myStudies = [
    {
      id: 1,
      title: "React 심화 스터디",
      location: "강남역",
      distance: "500m",
      members: 8,
      status: "진행중",
      nextMeeting: "2024-12-25"
    },
    {
      id: 2,
      title: "AWS 클라우드 자격증",
      location: "홍대입구",
      distance: "1.2km",
      members: 12,
      status: "진행중",
      nextMeeting: "2024-12-26"
    },
    {
      id: 3,
      title: "디자인 시스템 구축",
      location: "온라인",
      distance: "",
      members: 6,
      status: "완료",
      nextMeeting: ""
    }
  ];

  const stats = [
    { label: "참여 스터디", value: "12", icon: BookOpen, color: "blue" },
    { label: "완료한 스터디", value: "8", icon: Award, color: "purple" },
    { label: "획득한 배지", value: "24", icon: Award, color: "yellow" },
    { label: "연속 출석", value: "15일", icon: Calendar, color: "green" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">WithUp</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/notifications" className="rounded-lg p-2 hover:bg-gray-100 relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
              </Link>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                <Settings className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">환영합니다! 👋</h1>
          <p className="mt-2 text-gray-600">오늘도 목표를 향해 나아가세요</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="rounded-lg bg-white p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`rounded-lg p-3 bg-${stat.color}-100`}>
                    <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex gap-8">
            {[
              { id: "my-studies", label: "내 스터디" },
              { id: "available", label: "참여 가능한 스터디" },
              { id: "completed", label: "완료한 스터디" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "my-studies" && (
          <div className="space-y-6">
            {/* Create Study Button */}
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-8 text-center">
              <Plus className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">새로운 스터디 만들기</h3>
              <p className="mt-2 text-sm text-gray-600">직접 스터디를 만들고 팀원을 모집하세요</p>
              <Link href="/create-study" className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
                스터디 생성하기
              </Link>
            </div>

            {/* My Studies List */}
            <div className="grid gap-6 md:grid-cols-2">
              {myStudies.map((study) => (
                <div key={study.id} className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{study.title}</h3>
                      <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {study.location} {study.distance && `• ${study.distance}`}
                      </p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      study.status === "진행중" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {study.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {study.members}명
                    </div>
                    {study.nextMeeting && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        다음 모임: {study.nextMeeting}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href="/study" className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 text-center">
                      상세보기
                    </Link>
                    <Link href="/study/settings" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      설정
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="스터디 검색..."
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        )}

        {activeTab === "available" && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">참여 가능한 스터디</h3>
            <p className="mt-2 text-gray-600">근처의 스터디를 찾아보세요</p>
            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
              스터디 둘러보기
            </button>
          </div>
        )}

        {activeTab === "completed" && (
          <div className="text-center py-12">
            <Award className="mx-auto h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">완료한 스터디</h3>
            <p className="mt-2 text-gray-600">수고하셨습니다! 성과를 확인해보세요</p>
          </div>
        )}
      </main>
    </div>
  );
}
