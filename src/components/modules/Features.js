import { MapPin, Award, Shield, Users, FileText, Calendar, Star, TrendingUp } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "지역 기반 스터디 매칭",
      description: "위치 기반 탐색으로 가까운 스터디를 쉽게 찾고, 거리 필터와 온/오프라인 필터를 통해 최적의 매칭을 받을 수 있습니다.",
      color: "blue"
    },
    {
      icon: Award,
      title: "성과 포트폴리오 자동 생성",
      description: "스터디 종료 시 출석률, 과제 인증, 팀원 평가, 목표 달성률이 포함된 포트폴리오를 자동으로 생성합니다.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "안전한 회비 관리",
      description: "플랫폼 에스크로로 회비를 보관하고, 스터디 완료 후 리더에게 지급하는 안전한 결제 시스템을 제공합니다.",
      color: "green"
    },
    {
      icon: Users,
      title: "상호 평가 시스템",
      description: "스터디 종료 시 팀원과 리더를 평가할 수 있는 익명 평가 시스템으로 신뢰성을 높입니다.",
      color: "orange"
    },
    {
      icon: FileText,
      title: "출석/과제 인증",
      description: "QR 체크인, GPS 인증, AI 기반 이미지 위변조 탐지로 신뢰할 수 있는 출석 확인이 가능합니다.",
      color: "indigo"
    },
    {
      icon: Star,
      title: "성취 배지 시스템",
      description: "스터디 완료, 출석, 과제 제출 등 행동 기반 배지를 획득하고 희귀/전설 등급을 달성할 수 있습니다.",
      color: "yellow"
    },
    {
      icon: Calendar,
      title: "공간 대여 통합 결제",
      description: "제휴 스터디룸 예약과 참가비를 통합 결제하고 자동 영수증을 발행합니다.",
      color: "pink"
    },
    {
      icon: TrendingUp,
      title: "참여율 관리",
      description: "출석률, 과제 수행률을 시각화하고 배지/포인트 기반 인센티브로 지속적 참여를 유도합니다.",
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      yellow: "bg-yellow-100 text-yellow-600",
      pink: "bg-pink-100 text-pink-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            핵심 기능
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            지역 기반 매칭부터 성과 포트폴리오까지, 스터디를 위한 모든 기능을 한 곳에서
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${getColorClasses(feature.color)}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
