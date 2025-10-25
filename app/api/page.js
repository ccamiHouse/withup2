import PageLayout from "@/components/PageLayout";
import { Code, BookOpen, Key } from "lucide-react";

export const metadata = {
  title: "API 문서 - WithUp",
  description: "WithUp API 문서",
};

export default function APIPage() {
  return (
    <PageLayout title="API 문서" description="WithUp API를 활용해보세요">
      <div className="space-y-8">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">WithUp API v1</h2>
          <p className="text-gray-600">
            WithUp의 기능을 외부 애플리케이션에서 활용할 수 있도록 RESTful API를 제공합니다.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Key className="h-5 w-5" />
            인증
          </h3>
          <p className="text-gray-600 mb-4">
            API를 사용하기 위해서는 API Key가 필요합니다. 
            개발자 계정을 생성하신 후 API Key를 발급받으세요.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            <div>Authorization: Bearer YOUR_API_KEY</div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Code className="h-5 w-5" />
            주요 엔드포인트
          </h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-semibold">GET</span>
                <code className="text-gray-900">/api/v1/studies</code>
              </div>
              <p className="text-gray-600 text-sm">스터디 목록 조회</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-semibold">POST</span>
                <code className="text-gray-900">/api/v1/studies</code>
              </div>
              <p className="text-gray-600 text-sm">새 스터디 생성</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm font-semibold">GET</span>
                <code className="text-gray-900">/api/v1/studies/:id</code>
              </div>
              <p className="text-gray-600 text-sm">스터디 상세 정보 조회</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm font-semibold">DELETE</span>
                <code className="text-gray-900">/api/v1/studies/:id</code>
              </div>
              <p className="text-gray-600 text-sm">스터디 삭제</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            문서 보기
          </h3>
          <p className="text-gray-600 mb-4">
            자세한 API 문서와 예제 코드를 확인하려면 공식 문서를 참고하세요.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              전체 API 문서 보기
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              코드 예제 보기
            </button>
          </div>
        </section>

        <section className="p-6 bg-purple-50 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">API 키 발급</h3>
          <p className="text-gray-600 mb-4">
            개발자 계정을 생성하면 API 키를 발급받을 수 있습니다.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            개발자 계정 만들기
          </button>
        </section>
      </div>
    </PageLayout>
  );
}
