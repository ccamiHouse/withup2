import PageLayout from "@/components/PageLayout";
import { Calendar, User } from "lucide-react";

export const metadata = {
  title: "블로그 - WithUp",
  description: "WithUp 블로그",
};

export default function BlogPage() {
  const posts = [
    {
      title: "효과적인 스터디 운영을 위한 7가지 팁",
      excerpt: "스터디를 성공적으로 이끌기 위한 실전 노하우를 공유합니다.",
      author: "WithUp Team",
      date: "2024-12-20",
      category: "스터디 운영"
    },
    {
      title: "온라인 vs 오프라인 스터디, 어느 쪽이 좋을까?",
      excerpt: "온라인과 오프라인 스터디의 장단점을 비교해봅니다.",
      author: "WithUp Team",
      date: "2024-12-15",
      category: "스터디 가이드"
    },
    {
      title: "모바일 앱 출시! 언제 어디서나 스터디 관리하세요",
      excerpt: "새로운 모바일 앱으로 더 편리하게 스터디를 관리해보세요.",
      author: "WithUp Team",
      date: "2024-12-10",
      category: "업데이트"
    },
    {
      title: "스터디 목표 달성률을 높이는 전략",
      excerpt: "명확한 목표 설정과 성과 추적으로 학습 효과를 극대화하세요.",
      author: "WithUp Team",
      date: "2024-12-05",
      category: "학습 전략"
    }
  ];

  return (
    <PageLayout title="블로그" description="WithUp 소식과 유용한 정보를 만나보세요">
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </div>
              <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                더 읽기 →
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          최신 소식을 이메일로 받아보세요
        </h2>
        <p className="text-gray-600 mb-6">
          새로운 블로그 포스트가 게시되면 알려드립니다
        </p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            구독
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
