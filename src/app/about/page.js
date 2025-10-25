"use client";

import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: "🎯",
      title: "목표 달성",
      description: "함께 공부하며 목표를 이루는 즐거움을 경험합니다.",
    },
    {
      icon: "🤝",
      title: "협력과 성장",
      description: "서로 돕고 격려하며 함께 성장합니다.",
    },
    {
      icon: "💡",
      title: "지식 공유",
      description: "배운 것을 나누고 가르치며 더 깊이 배웁니다.",
    },
    {
      icon: "🌟",
      title: "기회 창출",
      description: "스터디 경험을 사이드잡으로 연결합니다.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "WithUp 베타 출시",
      description: "스터디 매칭 서비스 정식 오픈",
    },
    {
      year: "2024.06",
      title: "사이드잡 서비스 시작",
      description: "스터디 경험을 부업으로 연결하는 서비스 런칭",
    },
    {
      year: "2024.12",
      title: "회원 1만명 돌파",
      description: "누적 회원 10,000명 달성",
    },
    {
      year: "2025",
      title: "AI 추천 시스템 도입",
      description: "개인 맞춤형 스터디 추천 서비스 제공",
    },
  ];

  const team = [
    {
      name: "김대표",
      position: "CEO",
      description: "교육 플랫폼 10년 경력",
      image: "👨‍💼",
    },
    {
      name: "이기획",
      position: "CPO",
      description: "프로덕트 기획 전문가",
      image: "👩‍💻",
    },
    {
      name: "박개발",
      position: "CTO",
      description: "풀스택 개발 리더",
      image: "👨‍💻",
    },
    {
      name: "최디자인",
      position: "Design Lead",
      description: "UX/UI 디자인 총괄",
      image: "👩‍🎨",
    },
  ];

  const stats = [
    { number: "10,000+", label: "누적 회원" },
    { number: "5,000+", label: "진행된 스터디" },
    { number: "500+", label: "사이드잡 매칭" },
    { number: "95%", label: "만족도" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WithUp을 소개합니다
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              함께 성장하는 스터디 모임 플랫폼
              <br />
              배움을 나누고 기회를 만들어갑니다
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                우리의 미션
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                WithUp은 혼자서는 어려운 학습을 함께 해결하고,
                <br />
                그 과정에서 얻은 경험을 새로운 기회로 연결하여
                <br />
                모두가 성장할 수 있는 플랫폼을 만듭니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              핵심 가치
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="card-light dark:card-dark p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              연혁
            </motion.h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="font-bold text-primary-500">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full mt-1.5"></div>
                  <div className="flex-1 pb-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6 -ml-2">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50 dark:bg-dark-secondary transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              팀 소개
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="card-light dark:card-dark p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="card-light dark:card-dark p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                회사 정보
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p>
                  <strong>회사명:</strong> (주)WithUp
                </p>
                <p>
                  <strong>대표이사:</strong> 김대표
                </p>
                <p>
                  <strong>사업자등록번호:</strong> 123-45-67890
                </p>
                <p>
                  <strong>주소:</strong> 서울특별시 강남구 테헤란로 123, 4층
                </p>
                <p>
                  <strong>이메일:</strong>{" "}
                  <a
                    href="mailto:contact@withup.com"
                    className="text-primary-500 hover:text-primary-600"
                  >
                    contact@withup.com
                  </a>
                </p>
                <p>
                  <strong>전화:</strong> 02-1234-5678
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  문의하기
                </Link>
                <a
                  href="mailto:recruit@withup.com"
                  className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                >
                  채용 문의
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                WithUp과 함께 성장하세요
              </h2>
              <p className="text-xl mb-8">
                지금 바로 스터디 모임을 시작해보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/studies"
                  className="px-8 py-3 bg-white text-primary-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  스터디 찾기
                </Link>
                <Link
                  href="/studies/create"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors"
                >
                  스터디 개설하기
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

