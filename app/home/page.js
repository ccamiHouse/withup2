"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MapPin, BookOpen, Users, Award, TrendingUp, Calendar,
  Search, Plus
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("available");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for available studies
  const availableStudies = [
    {
      id: 1,
      title: "React 심화 스터디",
      location: "강남역",
      distance: "500m",
      members: 8,
      maxMembers: 10,
      tags: ["React", "프론트엔드"]
    },
    {
      id: 2,
      title: "AWS 클라우드 자격증",
      location: "홍대입구",
      distance: "1.2km",
      members: 12,
      maxMembers: 15,
      tags: ["AWS", "클라우드"]
    },
    {
      id: 3,
      title: "디자인 시스템 구축",
      location: "온라인",
      distance: "",
      members: 6,
      maxMembers: 8,
      tags: ["디자인", "UX"]
    }
  ];

  const stats = [
    { label: "활성 스터디", value: "128+", icon: BookOpen, color: "blue" },
    { label: "참여 멤버", value: "1,200+", icon: Users, color: "purple" },
    { label: "완료된 스터디", value: "500+", icon: Award, color: "yellow" },
    { label: "만족도", value: "4.9", icon: TrendingUp, color: "green" }
  ];

  // Filter studies based on search query (title, location, or tags)
  const filteredStudies = availableStudies.filter((study) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      study.title.toLowerCase().includes(query) ||
      study.location.toLowerCase().includes(query) ||
      study.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">WithUp에서 스터디를 찾아보세요! 👋</h1>
          <p className="mt-2 text-gray-600">지역 기반으로 나와 맞는 스터디를 만나보세요</p>
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
        {activeTab === "available" && (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="스터디 제목, 지역, 태그로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Available Studies List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudies.length > 0 ? (
                filteredStudies.map((study) => (
                  <div key={study.id} className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{study.title}</h3>
                        <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {study.location} {study.distance && `• ${study.distance}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {study.members}/{study.maxMembers}명
                      </div>
                      <div className="flex gap-1">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href="/study" 
                      className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 text-center"
                    >
                      상세보기
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-600">검색 결과가 없습니다</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    검색 초기화
                  </button>
                </div>
              )}
            </div>

            {/* CTA to Signup */}
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-8 text-center">
              <Plus className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">나만의 스터디 만들기</h3>
              <p className="mt-2 text-sm text-gray-600">직접 스터디를 만들고 팀원을 모집하세요</p>
              <Link href="/signup" className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
                지금 시작하기
              </Link>
            </div>
          </div>
        )}

        {activeTab === "completed" && (
          <div className="text-center py-12">
            <Award className="mx-auto h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">완료한 스터디</h3>
            <p className="mt-2 text-gray-600">스터디에 참여하면 여기에 표시됩니다</p>
            <Link href="/signup" className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
              로그인하여 참여하기
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
