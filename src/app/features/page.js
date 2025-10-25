import PageLayout from "@/components/PageLayout";
import { MapPin, Award, Shield, Users, TrendingUp, Clock } from "lucide-react";

export const metadata = {
  title: "기능 - WithUp",
  description: "WithUp의 주요 기능을 알아보세요",
};

export default function FeaturesPage() {
  const features = [
    {
      icon: MapPin,
      title: "지역 기반 매칭",
      description: "가까운 위치의 스터디원을 찾아 더 쉽게 모임을 가질 수 있습니다.",
      details: [
        "반경 내 스터디 자동 검색",
        "위치 기반 추천 시스템",
        "지도에서 한눈에 보기",
        "교통 시간 계산"
      ]
    },
    {
      icon: Award,
      title: "성과 포트폴리오",
      description: "스터디 참여 내용과 성과를 자동으로 기록하여 포트폴리오를 생성합니다.",
      details: [
        "자동 성과 기록",
        "배지 시스템",
        "이력서 연동",
        "성과 공유"
      ]
    },
    {
      icon: Shield,
      title: "안전한 회비 관리",
      description: "에스크로 시스템으로 회비를 안전하게 관리하고 의문사가 있을 때만 환불합니다.",
      details: [
        "에스크로 보관",
        "투명한 사용 내역",
        "의문사 시 환불",
        "자동 정산"
      ]
    },
    {
      icon: Users,
      title: "상호 평가 시스템",
      description: "참여자 간 평가로 신뢰도 높은 스터디 환경을 만들어갑니다.",
      details: [
        "1:1 평가 시스템",
        "신뢰도 지수",
        "부정행위 방지",
        "커뮤니티 신뢰도"
      ]
    },
    {
      icon: TrendingUp,
      title: "맞춤형 추천",
      description: "AI 기반 알고리즘으로 당신에게 가장 적합한 스터디를 추천합니다.",
      details: [
        "개인 맞춤 추천",
        "학습 목표 분석",
        "일정 최적화",
        "성향 분석"
      ]
    },
    {
      icon: Clock,
      title: "출석 관리",
      description: "자동 출석 체크로 스터디 참여를 쉽게 관리합니다.",
      details: [
        "GPS 기반 출석",
        "자동 출석 기록",
        "출석률 통계",
        "알림 기능"
      ]
    }
  ];

  return (
    <PageLayout title="주요 기능" description="WithUp이 제공하는 다양한 기능들을 확인해보세요">
      <div className="space-y-16">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-lg bg-blue-100 p-3">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 mt-4">
                {feature.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          지금 바로 시작해보세요
        </h2>
        <p className="text-center text-gray-600 mb-6">
          WithUp의 다양한 기능을 직접 경험해보세요
        </p>
        <div className="text-center">
          <a
            href="/signup"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            무료로 시작하기
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
