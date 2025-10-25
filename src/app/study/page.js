"use client";

import { useState } from "react";
import { 
  ArrowLeft, MapPin, Users, Calendar, DollarSign, Tag, 
  MessageSquare, Phone, Mail, Settings, Award, TrendingUp, Check
} from "lucide-react";
import Link from "next/link";

export default function StudyDetailPage() {
  const [isJoined, setIsJoined] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentUser] = useState({ name: "내이름", avatar: "👤" });

  const handleJoin = () => {
    setIsJoined(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleLeave = () => {
    setIsJoined(false);
  };

  // Mock data
  const study = {
    id: 1,
    title: "React 심화 스터디",
    description: "React를 마스터하고 싶은 분들을 위한 심화 스터디입니다. 실제 프로젝트를 함께 만들어보며 실전 경험을 쌓아갑니다.",
    category: "프로그래밍",
    location: "강남역 근처 카페",
    locationType: "오프라인",
    distance: "500m",
    members: 8,
    maxMembers: 10,
    fee: "무료",
    schedule: "매주 토요일 14:00 - 16:00",
    tags: ["React", "JavaScript", "프론트엔드"],
    status: "진행중",
    startDate: "2024-01-15",
    leader: {
      name: "김개발",
      rating: 4.9,
      memberSince: "2023년 1월"
    }
  };

  const members = [
    { id: 1, name: "김개발", role: "리더", avatar: "👨‍💻" },
    { id: 2, name: "이디자인", role: "멤버", avatar: "👩‍🎨" },
    { id: 3, name: "박마케팅", role: "멤버", avatar: "👨‍💼" },
    { id: 4, name: "최코딩", role: "멤버", avatar: "👩‍💻" },
    { id: 5, name: "정프론트", role: "멤버", avatar: "👨‍🔧" },
    { id: 6, name: "강백엔드", role: "멤버", avatar: "👩‍🔧" },
    { id: 7, name: "유풀스택", role: "멤버", avatar: "👨‍💻" },
    { id: 8, name: "한스타트업", role: "멤버", avatar: "👩‍💼" }
  ];

  // Display members with current user if joined
  const displayMembers = isJoined ? [...members, { id: 999, name: currentUser.name, role: "멤버", avatar: currentUser.avatar }] : members;
  
  // Calculate remaining slots
  const remainingSlots = isJoined ? (study.maxMembers - displayMembers.length) : (study.maxMembers - study.members);
  const isFull = remainingSlots <= 0 && !isJoined;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <Check className="h-5 w-5" />
            <span>스터디에 참여하셨습니다!</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="rounded-lg p-2 hover:bg-gray-100">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">스터디 상세</h1>
            <Link href="/study/settings" className="rounded-lg p-2 hover:bg-gray-100">
              <Settings className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Study Info Card */}
            <div className="rounded-lg bg-white p-8 shadow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{study.title}</h1>
                    {!isJoined && (
                      <div className={`px-4 py-2 rounded-lg font-semibold ${
                        remainingSlots > 0 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {remainingSlots > 0 ? (
                          <span>남은 자리 <span className="text-2xl">{remainingSlots}</span>명</span>
                        ) : (
                          <span>모집 마감</span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {study.category}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      study.status === "진행중" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {study.status}
                    </span>
                    {isFull && (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                        모집 완료
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">{study.description}</p>

              <div className="grid grid-cols-2 gap-6 border-t pt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">장소</p>
                    <p className="font-medium text-gray-900">{study.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">일정</p>
                    <p className="font-medium text-gray-900">{study.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">인원</p>
                    <p className="font-medium text-gray-900">
                      {isJoined ? displayMembers.length : study.members} / {study.maxMembers}명
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">회비</p>
                    <p className="font-medium text-gray-900">{study.fee}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                {study.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Members Section */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                멤버 ({displayMembers.length}명)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {displayMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors ${
                      isJoined && member.id === 999 ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                  >
                    <div className="text-4xl mb-2">{member.avatar}</div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <span className="text-xs text-gray-500">{member.role}</span>
                    {isJoined && member.id === 999 && (
                      <span className="mt-1 text-xs text-blue-600 font-medium">나</span>
                    )}
                  </div>
                ))}
              </div>
              {isJoined && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-700">참여중인 스터디입니다</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Action Card */}
            <div className="rounded-lg bg-white p-6 shadow">
              {!isJoined ? (
                <>
                  {isFull ? (
                    <div className="mb-3 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="font-medium text-gray-900">정원이 다 찼습니다</span>
                      </div>
                      <p className="text-sm text-gray-600">더 이상 참여할 수 없습니다</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-1">현재 모집 가능</p>
                        <p className="text-2xl font-bold text-blue-600">{remainingSlots}명</p>
                      </div>
                      <button 
                        onClick={handleJoin}
                        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 mb-3"
                      >
                        참여하기
                      </button>
                    </>
                  )}
                  <button className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
                    관심 스터디에 추가
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-900">참여 완료</span>
                    </div>
                    <p className="text-sm text-green-700">스터디 멤버로 추가되었습니다</p>
                  </div>
                  <button 
                    onClick={handleLeave}
                    className="w-full rounded-lg border border-red-300 px-6 py-3 font-medium text-red-700 hover:bg-red-50"
                  >
                    참여 취소하기
                  </button>
                </>
              )}
            </div>

            {/* Leader Info */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">스터디 리더</h3>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
                  {study.leader.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{study.leader.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{study.leader.rating} 평점</span>
                  </div>
                  <p className="text-sm text-gray-500">{study.leader.memberSince} 가입</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">스터디 통계</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">평균 출석률</span>
                  <span className="font-semibold text-gray-900">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">완료율</span>
                  <span className="font-semibold text-gray-900">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">생성일</span>
                  <span className="font-semibold text-gray-900">2024-01-15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
