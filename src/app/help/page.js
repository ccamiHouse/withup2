import PageLayout from "@/components/PageLayout";
import { Search, BookOpen, Video, FileText, HelpCircle } from "lucide-react";

export const metadata = {
  title: "도움말 센터 - WithUp",
  description: "WithUp 도움말 및 사용 가이드",
};

export default function HelpPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "시작하기",
      description: "처음 사용하는 분들을 위한 가이드",
      articles: [
        "계정 생성 방법",
        "프로필 설정하기",
        "첫 스터디 만들기",
        "스터디 찾기"
      ]
    },
    {
      icon: FileText,
      title: "스터디 관리",
      description: "스터디 생성 및 운영 가이드",
      articles: [
        "스터디 생성하기",
        "멤버 초대하기",
        "일정 관리하기",
        "출석 체크하기"
      ]
    },
    {
      icon: Video,
      title: "회비 관리",
      description: "안전한 회비 관리 방법",
      articles: [
        "회비 설정하기",
        "회비 납입하기",
        "사용 내역 확인",
        "환불 정책"
      ]
    },
    {
      icon: HelpCircle,
      title: "계정 및 설정",
      description: "계정 관리 및 설정",
      articles: [
        "프로필 수정",
        "비밀번호 변경",
        "알림 설정",
        "계정 삭제"
      ]
    }
  ];

  return (
    <PageLayout title="도움말 센터" description="필요한 정보를 빠르게 찾아보세요">
      <div className="space-y-12">
        <section>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="무엇을 도와드릴까요? 검색해보세요..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">주제별 도움말</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIdx) => (
                      <li key={articleIdx}>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2">
                          <span>•</span>
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">동영상 튜토리얼</h3>
          <p className="text-gray-600 mb-6">
            시각적으로 쉽게 이해할 수 있는 동영상 튜토리얼을 제공합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["시작하기 가이드", "스터디 만들기", "고급 기능"].map((title, idx) => (
              <div key={idx} className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                <Video className="h-12 w-12 text-blue-600" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">여전히 도움이 필요하신가요?</h3>
          <p className="text-gray-600 mb-6">
            원하는 답을 찾지 못하셨다면, 고객 센터로 직접 문의해주세요.
          </p>
          <a
            href="/support"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            고객 센터로 이동
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
