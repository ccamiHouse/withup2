import { Search, MapPin, Users, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: 1,
      title: "지역 기반 스터디 찾기",
      description: "위치 기반 지도에서 가까운 스터디를 탐색하거나 필터를 사용해 원하는 스터디를 찾습니다.",
      color: "blue"
    },
    {
      icon: Users,
      step: 2,
      title: "신청 및 참여비 결제",
      description: "스터디에 신청하고 안전한 에스크로 결제로 회비를 납부합니다.",
      color: "green"
    },
    {
      icon: MapPin,
      step: 3,
      title: "스터디 참여 및 인증",
      description: "QR 체크인, GPS 인증으로 출석하고 과제를 제출하며 스터디에 참여합니다.",
      color: "purple"
    },
    {
      icon: Award,
      step: 4,
      title: "성과 포트폴리오 획득",
      description: "스터디 종료 후 자동 생성된 포트폴리오와 배지를 받고 커뮤니티와 공유합니다.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            이용 방법
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            간단한 4단계로 나만의 스터디를 시작하고 성과를 만들어보세요
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isEven = (idx + 1) % 2 === 0;
            
            return (
              <div
                key={idx}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Step Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className={`flex h-24 w-24 items-center justify-center rounded-2xl ${getColorClasses(item.color)} shadow-lg`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gray-300" style={{ top: "calc(50% + 96px)" }}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
