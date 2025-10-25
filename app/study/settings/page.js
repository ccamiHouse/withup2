"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, Settings, Users, MapPin, Calendar, DollarSign, Trash2, Shield, Search } from "lucide-react";
import Link from "next/link";

// Dynamic import for map to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">지도를 불러오는 중...</p>
    </div>
  ),
});

export default function StudySettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [location, setLocation] = useState("강남역 근처 카페");
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationSelect = (lat, lng, address) => {
    setLocation(address);
    setShowMap(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/study" className="rounded-lg p-2 hover:bg-gray-100">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">스터디 설정</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <nav className="space-y-2">
              {[
                { id: "general", label: "일반 설정", icon: Settings },
                { id: "members", label: "멤버 관리", icon: Users },
                { id: "schedule", label: "일정 관리", icon: Calendar },
                { id: "location", label: "장소 설정", icon: MapPin },
                { id: "payment", label: "회비 관리", icon: DollarSign },
                { id: "privacy", label: "권한 설정", icon: Shield }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            {activeTab === "general" && (
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">기본 정보 수정</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">스터디 이름</label>
                      <input
                        type="text"
                        defaultValue="React 심화 스터디"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">설명</label>
                      <textarea
                        rows={5}
                        defaultValue="React를 마스터하고 싶은 분들을 위한 심화 스터디입니다."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                        <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                          <option>프로그래밍</option>
                          <option>디자인</option>
                          <option>언어</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">최대 인원수</label>
                        <input
                          type="number"
                          defaultValue="10"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                    </div>

                    <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                      저장하기
                    </button>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">위험 구역</h3>
                  <p className="text-sm text-red-700 mb-4">
                    이 작업들은 되돌릴 수 없습니다. 신중하게 진행해주세요.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                    <Trash2 className="h-4 w-4" />
                    스터디 삭제하기
                  </button>
                </div>
              </div>
            )}

            {activeTab === "members" && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">멤버 관리</h2>
                
                <div className="space-y-4">
                  {/* Member list */}
                  {[
                    { name: "김개발", role: "리더", status: "활성" },
                    { name: "이디자인", role: "멤버", status: "활성" },
                    { name: "박마케팅", role: "멤버", status: "활성" }
                  ].map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-green-600">{member.status}</span>
                        <button className="text-sm text-red-600 hover:text-red-700">강퇴</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">일정 관리</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">일정</label>
                    <textarea
                      rows={3}
                      defaultValue="매주 토요일 14:00 - 16:00"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">시작 날짜</label>
                      <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">종료 날짜</label>
                      <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    </div>
                  </div>

                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    저장하기
                  </button>
                </div>
              </div>
            )}

            {activeTab === "location" && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">장소 설정</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">장소</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                      <button
                        type="button"
                        onClick={() => setShowMap(!showMap)}
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
                      >
                        <MapPin className="h-5 w-5" />
                        {showMap ? "닫기" : "지도에서 찾기"}
                      </button>
                    </div>
                  </div>

                  {showMap && (
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-300">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="장소를 검색하세요..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            <Search className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="h-96">
                        <MapComponent 
                          onLocationSelect={handleLocationSelect}
                          searchQuery={searchQuery}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">진행 방식</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="locationType" defaultChecked className="mr-2" />
                        오프라인
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="locationType" className="mr-2" />
                        온라인
                      </label>
                    </div>
                  </div>

                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    저장하기
                  </button>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">회비 관리</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">회비 금액</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <p className="mt-2 text-sm text-gray-500">0원 입력 시 무료</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">회비 목적</label>
                    <input
                      type="text"
                      placeholder="예: 스터디룸 대여비, 교재 구매비 등"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <p className="mt-2 text-sm text-gray-500">회비가 사용될 목적을 적어주세요</p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="font-medium text-gray-900 mb-2">회비 현황</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">총 수집 금액</span>
                        <span className="font-medium">80,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">사용 금액</span>
                        <span className="font-medium">45,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">잔여 금액</span>
                        <span className="font-medium text-green-600">35,000원</span>
                      </div>
                    </div>
                  </div>

                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    저장하기
                  </button>
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">권한 설정</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">스터디 공개 설정</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="privacy" defaultChecked className="mr-2" />
                        공개 - 누구나 검색 가능
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="privacy" className="mr-2" />
                        비공개 - 초대만 가능
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">가입 승인 방식</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="approval" defaultChecked className="mr-2" />
                        자동 승인
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="approval" className="mr-2" />
                        수동 승인 필요
                      </label>
                    </div>
                  </div>

                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    저장하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
