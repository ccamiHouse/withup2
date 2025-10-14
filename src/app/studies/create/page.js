'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function CreateStudyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    period: '',
    maxMembers: 5,
    isOnline: false,
    startDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API 호출로 스터디 생성
    console.log('스터디 생성:', formData);
    alert('스터디가 개설되었습니다!');
    router.push('/studies');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">스터디 개설하기</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                스터디 제목 *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="예: 토익 900점 달성 스터디"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                스터디 소개 *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="스터디에 대해 자세히 설명해주세요"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카테고리 *
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">선택하세요</option>
                <option value="개발">개발</option>
                <option value="어학">어학</option>
                <option value="취업">취업</option>
                <option value="자격증">자격증</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* Online/Offline */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isOnline"
                  checked={formData.isOnline}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  온라인 스터디
                </span>
              </label>
            </div>

            {/* Location (if offline) */}
            {!formData.isOnline && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  활동 지역 *
                </label>
                <select
                  name="location"
                  required={!formData.isOnline}
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="강남구">강남구</option>
                  <option value="서초구">서초구</option>
                  <option value="마포구">마포구</option>
                  <option value="종로구">종로구</option>
                  <option value="송파구">송파구</option>
                  <option value="영등포구">영등포구</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            )}

            {/* Period */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                활동 기간 *
              </label>
              <select
                name="period"
                required
                value={formData.period}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">선택하세요</option>
                <option value="1개월">1개월</option>
                <option value="2개월">2개월</option>
                <option value="3개월">3개월</option>
                <option value="6개월">6개월</option>
                <option value="12개월">12개월</option>
              </select>
            </div>

            {/* Start Date */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                시작 예정일 *
              </label>
              <input
                type="date"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Max Members */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                모집 인원 *
              </label>
              <input
                type="number"
                name="maxMembers"
                required
                min="2"
                max="20"
                value={formData.maxMembers}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">최소 2명, 최대 20명</p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                스터디 개설하기
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

