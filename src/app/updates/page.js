import PageLayout from "@/components/uncategorized/PageLayout";
import { Calendar, Tag } from "lucide-react";

export const metadata = {
  title: "업데이트 - WithUp",
  description: "WithUp의 최신 업데이트 소식을 확인하세요",
};

export default function UpdatesPage() {
  const updates = [
    {
      date: "2024-12-20",
      version: "v1.5.0",
      category: "기능 개선",
      title: "스터디 검색 기능 대폭 개선",
      description: "더 빠르고 정확한 스터디 검색을 위한 알고리즘 업데이트",
      features: [
        "검색 속도 50% 향상",
        "필터 옵션 추가",
        "정확도 개선"
      ]
    },
    {
      date: "2024-12-10",
      version: "v1.4.5",
      category: "버그 수정",
      title: "안정성 개선 및 버그 수정",
      description: "사용자 경험 개선을 위한 여러 버그 수정",
      features: [
        "로그인 오류 수정",
        "지도 로딩 성능 개선",
        "알림 시스템 안정화"
      ]
    },
    {
      date: "2024-12-01",
      version: "v1.4.0",
      category: "새로운 기능",
      title: "그룹 채팅 기능 출시",
      description: "스터디 멤버 간 소통을 위한 그룹 채팅 기능 추가",
      features: [
        "실시간 그룹 채팅",
        "파일 공유 기능",
        "멘션 기능"
      ]
    },
    {
      date: "2024-11-20",
      version: "v1.3.0",
      category: "새로운 기능",
      title: "모바일 앱 출시",
      description: "더 편리한 사용을 위한 모바일 앱 출시",
      features: [
        "iOS 앱 출시",
        "Android 앱 출시",
        "푸시 알림 기능"
      ]
    }
  ];

  return (
    <PageLayout 
      title="업데이트" 
      description="WithUp의 최신 소식과 업데이트를 확인하세요"
    >
      <div className="space-y-8">
        {updates.map((update, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                <Tag className="h-3 w-3" />
                {update.category}
              </span>
              <span className="text-sm text-gray-500">{update.version}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">{update.date}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h3>
            <p className="text-gray-600 mb-4">{update.description}</p>

            <ul className="space-y-2">
              {update.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">알림 받기</h2>
        <p className="text-gray-600 mb-6">
          새로운 업데이트 소식을 가장 먼저 받아보세요
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            구독하기
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
