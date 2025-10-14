'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudyCard from '@/components/StudyCard';

export default function StudiesPage() {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    period: '',
    isOnline: '',
  });

  // 임시 스터디 데이터
  const allStudies = [
    {
      id: 1,
      title: '토익 900점 달성 스터디',
      description: '3개월 안에 토익 900점을 목표로 하는 스터디입니다.',
      category: '어학',
      location: '강남구',
      period: '3개월',
      currentMembers: 3,
      maxMembers: 5,
      isOnline: false,
    },
    {
      id: 2,
      title: '파이썬 웹 개발 스터디',
      description: 'Django를 활용한 웹 개발 프로젝트 스터디',
      category: '개발',
      location: '서초구',
      period: '2개월',
      currentMembers: 4,
      maxMembers: 6,
      isOnline: true,
    },
    {
      id: 3,
      title: '공기업 NCS 준비반',
      description: 'NCS 시험 대비 문제 풀이 및 스터디',
      category: '취업',
      location: '마포구',
      period: '2개월',
      currentMembers: 2,
      maxMembers: 5,
      isOnline: false,
    },
    {
      id: 4,
      title: 'React 심화 스터디',
      description: 'React 고급 패턴과 성능 최적화를 다루는 스터디',
      category: '개발',
      location: '강남구',
      period: '2개월',
      currentMembers: 5,
      maxMembers: 6,
      isOnline: true,
    },
    {
      id: 5,
      title: 'JLPT N2 합격반',
      description: '일본어능력시험 N2 합격을 목표로 하는 스터디',
      category: '어학',
      location: '종로구',
      period: '3개월',
      currentMembers: 4,
      maxMembers: 6,
      isOnline: false,
    },
    {
      id: 6,
      title: '데이터 분석 입문',
      description: 'Python과 SQL을 활용한 데이터 분석 스터디',
      category: '개발',
      location: '송파구',
      period: '2개월',
      currentMembers: 3,
      maxMembers: 5,
      isOnline: true,
    },
  ];

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">스터디 찾기</h1>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  카테고리
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="">전체</option>
                  <option value="개발">개발</option>
                  <option value="어학">어학</option>
                  <option value="취업">취업</option>
                  <option value="자격증">자격증</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  지역
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">전체</option>
                  <option value="강남구">강남구</option>
                  <option value="서초구">서초구</option>
                  <option value="마포구">마포구</option>
                  <option value="종로구">종로구</option>
                  <option value="송파구">송파구</option>
                </select>
              </div>

              {/* Period Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  기간
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.period}
                  onChange={(e) => handleFilterChange('period', e.target.value)}
                >
                  <option value="">전체</option>
                  <option value="1개월">1개월</option>
                  <option value="2개월">2개월</option>
                  <option value="3개월">3개월</option>
                  <option value="6개월">6개월 이상</option>
                </select>
              </div>

              {/* Online Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  온/오프라인
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.isOnline}
                  onChange={(e) => handleFilterChange('isOnline', e.target.value)}
                >
                  <option value="">전체</option>
                  <option value="true">온라인</option>
                  <option value="false">오프라인</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-gray-600">
              총 <span className="font-semibold text-blue-600">{allStudies.length}</span>개의 스터디
            </p>
          </div>

          {/* Study Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {allStudies.map((study) => (
              <StudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

