"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, MapPin, Users, Calendar, DollarSign, FileText, Tag, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Dynamic import for map to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">지도를 불러오는 중...</p>
    </div>
  ),
});

export default function CreateStudyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    maxMembers: "",
    location: "",
    locationType: "offline",
    latitude: null,
    longitude: null,
    fee: "",
    feePurpose: "",
    startDate: "",
    endDate: "",
    schedule: "",
    tags: []
  });

  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationSelect = (lat, lng, address) => {
    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
      location: address
    });
    setShowMap(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement create study logic
    console.log("Create study data:", formData);
    
    // 스터디 생성 성공 시 상세 페이지로 이동
    router.push("/study");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="rounded-lg p-2 hover:bg-gray-100">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">새 스터디 만들기</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">기본 정보</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  스터디 이름 *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="예: React 마스터하기"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  설명 *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="스터디에 대해 설명해주세요"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    카테고리 *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">선택하세요</option>
                    <option value="programming">프로그래밍</option>
                    <option value="design">디자인</option>
                    <option value="language">언어</option>
                    <option value="certification">자격증</option>
                    <option value="business">비즈니스</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700 mb-2">
                    최대 인원수 *
                  </label>
                  <input
                    type="number"
                    id="maxMembers"
                    name="maxMembers"
                    min="2"
                    max="20"
                    required
                    value={formData.maxMembers}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="예: 10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  태그
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags.join(", ")}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(", ").filter(t => t.trim()) })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="예: React, JavaScript, 프론트엔드"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              장소
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  진행 방식 *
                </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locationType"
                        value="offline"
                        checked={formData.locationType === "offline"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      오프라인
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locationType"
                        value="online"
                        checked={formData.locationType === "online"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      온라인
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locationType"
                        value="hybrid"
                        checked={formData.locationType === "hybrid"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      혼합
                    </label>
                  </div>
              </div>

              {formData.locationType !== "online" && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      상세 주소
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="예: 서울시 강남구 테헤란로"
                      />
                      <button
                        type="button"
                        onClick={() => setShowMap(!showMap)}
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
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
                </div>
              )}
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              일정
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    시작일
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                    종료일
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-2">
                  정기 일정 (예: 매주 토요일 14:00 - 16:00)
                </label>
                <textarea
                  id="schedule"
                  name="schedule"
                  rows={3}
                  value={formData.schedule}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="예: 매주 토요일 14:00 - 16:00"
                />
              </div>
            </div>
          </div>

          {/* Fee */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              회비 정보
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-2">
                  회비 금액
                </label>
                <input
                  type="number"
                  id="fee"
                  name="fee"
                  min="0"
                  value={formData.fee}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="원"
                />
                <p className="mt-2 text-sm text-gray-500">0원 입력 시 무료</p>
              </div>

              <div>
                <label htmlFor="feePurpose" className="block text-sm font-medium text-gray-700 mb-2">
                  회비 목적
                </label>
                <input
                  type="text"
                  id="feePurpose"
                  name="feePurpose"
                  value={formData.feePurpose}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="예: 스터디룸 대여비, 교재 구매비 등"
                />
                <p className="mt-2 text-sm text-gray-500">회비가 사용될 목적을 적어주세요</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
            >
              취소
            </Link>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              스터디 생성하기
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
