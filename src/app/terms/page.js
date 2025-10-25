"use client";

import { useState } from "react";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "제1조",
      title: "제1조 (목적)",
      content: `본 약관은 WithUp(이하 "회사")이 제공하는 스터디 모임 플랫폼 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`,
    },
    {
      id: "제2조",
      title: "제2조 (정의)",
      content: `1. "서비스"란 회사가 제공하는 스터디 모임 매칭, 관리, 사이드잡 연결 등 관련된 제반 서비스를 의미합니다.
2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.
3. "회원"이란 회사와 서비스 이용계약을 체결하고 이용자 아이디(ID)를 부여받은 자를 말합니다.
4. "스터디"란 회원들이 특정 목적을 위해 구성한 학습 모임을 의미합니다.
5. "사이드잡"이란 스터디 활동 경험을 바탕으로 제공되는 튜터링, 강의 등의 부업 기회를 의미합니다.`,
    },
    {
      id: "제3조",
      title: "제3조 (약관의 효력 및 변경)",
      content: `1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
2. 본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지합니다.
3. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.
4. 약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지하며, 중요한 변경사항의 경우 30일 전에 공지합니다.
5. 회원이 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 회원 탈퇴를 할 수 있습니다.`,
    },
    {
      id: "제4조",
      title: "제4조 (회원가입)",
      content: `1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
   가. 등록 내용에 허위, 기재누락, 오기가 있는 경우
   나. 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우
3. 회원가입계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.`,
    },
    {
      id: "제5조",
      title: "제5조 (회원 탈퇴 및 자격 상실)",
      content: `1. 회원은 언제든지 서비스 이용을 원하지 않는 경우 회원 탈퇴를 요청할 수 있습니다.
2. 회사는 회원이 다음 각 호의 사유에 해당하는 경우, 회원 자격을 제한 또는 정지시킬 수 있습니다.
   가. 가입 신청 시 허위 내용을 등록한 경우
   나. 다른 이용자의 서비스 이용을 방해하거나 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
   다. 서비스를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
   라. 기타 관련 법령이나 회사가 정한 이용조건에 위배되는 경우`,
    },
    {
      id: "제6조",
      title: "제6조 (서비스의 제공 및 변경)",
      content: `1. 회사는 다음과 같은 서비스를 제공합니다.
   가. 스터디 모임 개설 및 참여 서비스
   나. 스터디 관리 도구 (출석 체크, 일정 관리, 공지사항 등)
   다. 사이드잡 매칭 서비스
   라. 기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 서비스
2. 회사는 상당한 이유가 있는 경우 서비스의 내용을 변경할 수 있으며, 변경 시 사전에 공지합니다.`,
    },
    {
      id: "제7조",
      title: "제7조 (서비스의 중단)",
      content: `1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
2. 제1항에 의한 서비스 중단의 경우 회사는 사전 또는 사후에 이를 공지합니다.
3. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 않습니다. 단, 회사의 고의 또는 과실이 있는 경우는 예외로 합니다.`,
    },
    {
      id: "제8조",
      title: "제8조 (회원의 의무)",
      content: `1. 회원은 다음 행위를 하여서는 안 됩니다.
   가. 신청 또는 변경 시 허위 내용의 등록
   나. 타인의 정보 도용
   다. 회사에 게시된 정보의 변경
   라. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
   마. 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해
   바. 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
   사. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위
2. 회원은 관계 법령, 본 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항을 준수해야 합니다.`,
    },
    {
      id: "제9조",
      title: "제9조 (저작권의 귀속 및 이용제한)",
      content: `1. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
2. 회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
3. 회원이 서비스 내에 게시한 게시물의 저작권은 해당 회원에게 귀속됩니다.`,
    },
    {
      id: "제10조",
      title: "제10조 (분쟁해결)",
      content: `1. 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
2. 회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.
3. 회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.`,
    },
    {
      id: "제11조",
      title: "제11조 (재판권 및 준거법)",
      content: `1. 회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용합니다.
2. 회사와 이용자 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제소합니다.`,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              이용약관
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              WithUp 서비스 이용약관
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              최종 업데이트: 2025년 1월 1일
            </p>
          </motion.div>

          {/* 목차 */}
          <motion.div
            className="card-light dark:card-dark p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              목차
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-primary-500 hover:text-primary-600 text-sm transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 내용 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                className="card-light dark:card-dark p-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* 부칙 */}
          <motion.div
            className="mt-8 card-light dark:card-dark p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              부칙
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              본 약관은 2025년 1월 1일부터 시행됩니다.
            </p>
          </motion.div>

          {/* 안내 */}
          <motion.div
            className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-4">
              <svg
                className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-semibold mb-2">문의사항</p>
                <p>
                  이용약관에 대해 궁금하신 점이 있으시면 고객센터
                  (support@withup.com)로 문의해 주세요.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

