import PageLayout from "@/components/uncategorized/PageLayout";
import { MapPin, Briefcase } from "lucide-react";

export const metadata = {
  title: "채용 - WithUp",
  description: "WithUp과 함께 성장하세요",
};

export default function CareersPage() {
  const positions = [
    {
      title: "프론트엔드 개발자",
      department: "개발팀",
      location: "서울 (원격 가능)",
      type: "정규직"
    },
    {
      title: "백엔드 개발자",
      department: "개발팀",
      location: "서울 (원격 가능)",
      type: "정규직"
    },
    {
      title: "UX/UI 디자이너",
      department: "디자인팀",
      location: "서울",
      type: "정규직"
    },
    {
      title: "마케팅 매니저",
      department: "마케팅팀",
      location: "서울",
      type: "정규직"
    }
  ];

  return (
    <PageLayout title="채용" description="WithUp과 함께 성장하세요">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">열정적인 사람들과 함께하세요</h2>
        <p className="text-lg text-gray-600">
          WithUp은 스터디 문화를 혁신하고 싶은 열정적인 팀원을 찾고 있습니다.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        <h3 className="text-2xl font-bold text-gray-900">채용 공고</h3>
        {positions.map((position, idx) => (
          <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h4>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {position.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </span>
                </div>
              </div>
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {position.type}
              </span>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              자세히 보기 →
            </button>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">성장하는 환경</h4>
          <p className="text-gray-600 text-sm">
            지속적인 학습과 성장을 지원하는 환경을 제공합니다
          </p>
        </div>
        <div className="p-6 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">유연한 근무</h4>
          <p className="text-gray-600 text-sm">
            원격 근무와 유연한 근무 시간을 지원합니다
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">균형잡힌 복지</h4>
          <p className="text-gray-600 text-sm">
            건강하고 행복한 삶을 위한 다양한 복지 혜택
          </p>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">원하는 포지션이 없나요?</h3>
        <p className="mb-6 opacity-90">
          자유롭게 지원해주세요. 언제든지 좋은 인재를 만날 준비가 되어 있습니다.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          일반 지원하기
        </button>
      </div>
    </PageLayout>
  );
}
