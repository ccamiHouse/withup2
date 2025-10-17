"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudyCard from "@/components/StudyCard";
import VoiceButton from "@/components/VoiceButton";
import AudioWaveform from "@/components/AudioWaveform";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // 임시 스터디 데이터
  const recommendedStudies = [
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              함께 성장하는 스터디 모임
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              원하는 주제, 지역, 기간으로 스터디를 찾고 <br />
              학습 경험을 사이드잡으로 연결하세요
            </p>

            {/* 음성 기능 소개 */}
            <div className="mb-8 flex justify-center items-center space-x-4">
              <VoiceButton size="default" />
              <span className="text-lg">음성으로 스터디 소통하기</span>
            </div>

            <div className="flex gap-4 justify-center">
              <Link
                href="/studies/create"
                className="pill-button bg-white text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                스터디 개설하기
              </Link>
              <Link
                href="/studies"
                className="pill-button bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                스터디 찾기
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-16 bg-gray-50 dark:bg-dark-secondary transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              WithUp의 특별함
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="card-light dark:card-dark p-6 group hover:shadow-lg transition-shadow duration-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  맞춤 매칭
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  지역, 주제, 기간 등 원하는 조건에 맞는 스터디를 추천받으세요
                </p>
              </motion.div>
              <motion.div
                className="card-light dark:card-dark p-6 group hover:shadow-lg transition-shadow duration-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  효율적인 운영
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  출석 체크, 일정 관리, 역할 분담까지 스터디 운영을 쉽게
                </p>
              </motion.div>
              <motion.div
                className="card-light dark:card-dark p-6 group hover:shadow-lg transition-shadow duration-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  음성 소통
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  음성 메시지로 더 자연스럽고 효율적인 스터디 소통
                </p>
                <div className="mt-4 flex justify-center">
                  <AudioWaveform isPlaying={true} height="h-6" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Recommended Studies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                추천 스터디
              </h2>
              <Link
                href="/studies"
                className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
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
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="text-xl mb-8">
              원하는 스터디를 찾거나 직접 개설해보세요
            </p>
            <Link
              href="/studies/create"
              className="pill-button bg-white text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 inline-block"
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
