import PageLayout from "@/components/PageLayout";
import { UserPlus, Search, CheckCircle, Award } from "lucide-react";

export const metadata = {
  title: "이용 방법 - WithUp",
  description: "WithUp 사용 방법을 알아보세요",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "회원가입",
      description: "간단한 정보로 회원가입을 진행합니다.",
      details: [
        "이메일 또는 소셜 로그인",
        "프로필 설정",
        "관심사 선택",
        "위치 설정 (선택)"
      ]
    },
    {
      number: 2,
      icon: Search,
      title: "스터디 찾기 또는 만들기",
      description: "원하는 스터디를 찾거나 직접 만들어보세요.",
      details: [
        "검색 및 필터링",
        "지도에서 위치 확인",
        "상세 정보 확인",
        "스터디 개설하기"
      ]
    },
    {
      number: 3,
      icon: CheckCircle,
      title: "스터디 참여",
      description: "스터디에 참여하고 회비를 안전하게 보관합니다.",
      details: [
        "참여 신청",
        "회비 납입 (필요시)",
        "확인 및 승인",
        "참여 승인 알림"
      ]
    },
    {
      number: 4,
      icon: Award,
      title: "목표 달성",
      description: "스터디에 성실히 참여하고 성과를 기록합니다.",
      details: [
        "정기 모임 참여",
        "출석 체크",
        "성과 기록",
        "배지 획득 및 포트폴리오 생성"
      ]
    }
  ];

  return (
    <PageLayout 
      title="이용 방법" 
      description="4단계로 시작하는 WithUp 여정을 시작하세요"
    >
      <div className="space-y-12">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">3분 회원가입</h3>
          <p className="text-gray-600 text-sm">
            간단한 정보만 입력하면 바로 시작할 수 있습니다
          </p>
        </div>
        <div className="p-6 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">무료로 시작</h3>
          <p className="text-gray-600 text-sm">
            기본 기능은 모두 무료로 이용할 수 있습니다
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">안전한 운영</h3>
          <p className="text-gray-600 text-sm">
            에스크로 시스템으로 안전하게 운영됩니다
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
