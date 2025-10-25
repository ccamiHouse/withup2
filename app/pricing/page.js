import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "가격 - WithUp",
  description: "WithUp 요금제를 확인하세요",
};

export default function PricingPage() {
  const plans = [
    {
      name: "무료",
      price: "₩0",
      period: "평생 무료",
      description: "개인 학습자를 위한 기본 플랜",
      features: [
        "스터디 생성 및 참여 (월 3개)",
        "기본 매칭 서비스",
        "출석 관리",
        "기본 성과 기록"
      ],
      popular: false
    },
    {
      name: "프리미엄",
      price: "₩15,000",
      period: "월",
      description: "적극적인 학습자를 위한 프리미엄 플랜",
      features: [
        "무제한 스터디 생성 및 참여",
        "우선 매칭 서비스",
        "상세 성과 분석",
        "배지 및 포트폴리오 자동 생성",
        "프리미엄 고객 지원",
        "광고 제거"
      ],
      popular: true
    },
    {
      name: "그룹",
      price: "문의",
      period: "맞춤",
      description: "회사 및 기관을 위한 그룹 플랜",
      features: [
        "그룹 관리 기능",
        "커스텀 브랜딩",
        "전용 계정 관리자",
        "맞춤형 성과 리포트",
        "API 연동",
        "우선 지원"
      ],
      popular: false
    }
  ];

  return (
    <PageLayout 
      title="요금제" 
      description="당신에게 맞는 플랜을 선택하세요"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl border-2 p-8 ${
              plan.popular
                ? "border-blue-600 shadow-xl"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  인기
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600">/{plan.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              시작하기
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">언제든지 플랜을 변경할 수 있나요?</h3>
            <p className="text-gray-600">
              네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 즉시 적용됩니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">환불 정책이 어떻게 되나요?</h3>
            <p className="text-gray-600">
              ㅁ무료로 시작하셨다면 언제든지 무료 플랜으로 돌아갈 수 있습니다. 유료 플랜의 경우 첫 달 환불이 가능합니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">그룹 플랜은 어떻게 시작하나요?</h3>
            <p className="text-gray-600">
              그룹 플랜은 맞춤형으로 제공되므로, 연락처 정보를 남겨주시면 담당자가 직접 연락드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
