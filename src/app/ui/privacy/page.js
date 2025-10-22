"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      id: "제1조",
      title: "제1조 (개인정보의 처리 목적)",
      content: `WithUp('회사'라 함)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 회원 가입 및 관리
   - 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적

2. 스터디 서비스 제공
   - 스터디 모임 매칭, 스터디 관리, 출석 체크, 일정 관리, 콘텐츠 제공, 본인인증, 연령인증

3. 사이드잡 서비스 제공
   - 사이드잡 매칭, 지원서 관리, 계약 체결 및 이행

4. 마케팅 및 광고에 활용
   - 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계`,
    },
    {
      id: "제2조",
      title: "제2조 (개인정보의 처리 및 보유 기간)",
      content: `1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

   가. 회원 가입 및 관리 : 서비스 탈퇴 시까지
      다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
      - 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지
      - 서비스 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지

   나. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제·정산 완료시까지
      다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
      - 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록
        · 표시·광고에 관한 기록 : 6개월
        · 계약 또는 청약철회 등에 관한 기록 : 5년
        · 대금결제 및 재화 등의 공급에 관한 기록 : 5년
        · 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년`,
    },
    {
      id: "제3조",
      title: "제3조 (처리하는 개인정보의 항목)",
      content: `회사는 다음의 개인정보 항목을 처리하고 있습니다.

1. 회원 가입 및 관리
   - 필수항목 : 이름, 이메일, 비밀번호, 휴대전화번호
   - 선택항목 : 프로필 사진, 자기소개, 관심 분야

2. 스터디 서비스 이용
   - 필수항목 : 이름, 이메일
   - 선택항목 : 스터디 활동 기록, 출석 정보

3. 사이드잡 서비스 이용
   - 필수항목 : 이름, 이메일, 휴대전화번호, 경력사항
   - 선택항목 : 이력서, 포트폴리오

4. 인터넷 서비스 이용과정에서 자동 생성·수집되는 정보
   - IP주소, 쿠키, MAC주소, 서비스 이용 기록, 방문 기록, 불량 이용 기록 등`,
    },
    {
      id: "제4조",
      title: "제4조 (개인정보의 제3자 제공)",
      content: `1. 회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

2. 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.

   가. 사이드잡 제공 업체
      - 제공받는 자 : 사이드잡 제공 파트너사
      - 제공 목적 : 사이드잡 매칭 및 계약 이행
      - 제공 항목 : 이름, 이메일, 휴대전화번호, 경력사항
      - 보유 및 이용 기간 : 사이드잡 계약 종료 시까지`,
    },
    {
      id: "제5조",
      title: "제5조 (개인정보처리의 위탁)",
      content: `1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

   가. 이메일 발송 대행
      - 위탁받는 자 : AWS SES
      - 위탁하는 업무의 내용 : 이메일 발송 서비스

   나. 결제 처리
      - 위탁받는 자 : 결제 대행사
      - 위탁하는 업무의 내용 : 신용카드 결제 처리

2. 회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.

3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.`,
    },
    {
      id: "제6조",
      title: "제6조 (정보주체의 권리·의무 및 그 행사방법)",
      content: `1. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
   가. 개인정보 열람요구
   나. 오류 등이 있을 경우 정정 요구
   다. 삭제요구
   라. 처리정지 요구

2. 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.

3. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.

4. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.`,
    },
    {
      id: "제7조",
      title: "제7조 (개인정보의 파기)",
      content: `1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

2. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.

3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.
   가. 파기절차
      - 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.

   나. 파기방법
      - 회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.`,
    },
    {
      id: "제8조",
      title: "제8조 (개인정보의 안전성 확보 조치)",
      content: `회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육 등
2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제`,
    },
    {
      id: "제9조",
      title: "제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)",
      content: `1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.

2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.

   가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.

   나. 쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.

   다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.`,
    },
    {
      id: "제10조",
      title: "제10조 (개인정보 보호책임자)",
      content: `1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
   - 성명 : 김책임
   - 직책 : CTO
   - 이메일 : privacy@withup.com
   - 전화번호 : 02-1234-5678

2. 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.`,
    },
    {
      id: "제11조",
      title: "제11조 (권익침해 구제방법)",
      content: `정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.

▶ 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
▶ 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
▶ 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
▶ 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)`,
    },
    {
      id: "제12조",
      title: "제12조 (개인정보 처리방침 변경)",
      content: `1. 이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.

2. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
   - 2024년 1월 1일 ~ 2024년 12월 31일 적용 (링크)`,
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
            <div className="w-20 h-20 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-secondary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              개인정보처리방침
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              WithUp 개인정보처리방침
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

          {/* 안내 */}
          <motion.div
            className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex gap-4">
              <svg
                className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-green-800 dark:text-green-200">
                <p className="font-semibold mb-2">개인정보 보호</p>
                <p>
                  WithUp은 회원님의 개인정보를 소중히 여기며, 관련 법령에 따라
                  안전하게 관리하고 있습니다. 개인정보와 관련하여 문의사항이
                  있으시면 privacy@withup.com으로 연락주세요.
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

