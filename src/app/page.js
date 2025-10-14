import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudyCard from '@/components/StudyCard';
import Link from 'next/link';

export default function Home() {
  // 임시 스터디 데이터
  const recommendedStudies = [
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
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              함께 성장하는 스터디 모임
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              원하는 주제, 지역, 기간으로 스터디를 찾고 <br />
              학습 경험을 사이드잡으로 연결하세요
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/studies/create"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                스터디 개설하기
              </Link>
              <Link
                href="/studies"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                스터디 찾기
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              WithUp의 특별함
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">맞춤 매칭</h3>
                <p className="text-gray-600">
                  지역, 주제, 기간 등 원하는 조건에 맞는 스터디를 추천받으세요
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">효율적인 운영</h3>
                <p className="text-gray-600">
                  출석 체크, 일정 관리, 역할 분담까지 스터디 운영을 쉽게
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-2">사이드잡 연결</h3>
                <p className="text-gray-600">
                  스터디 활동을 바탕으로 부업 기회를 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Studies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">추천 스터디</h2>
              <Link
                href="/studies"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendedStudies.map((study) => (
                <StudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8">
              원하는 스터디를 찾거나 직접 개설해보세요
            </p>
            <Link
              href="/studies/create"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              스터디 개설하기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

