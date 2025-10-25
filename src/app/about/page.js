import PageLayout from "@/components/uncategorized/PageLayout";

export const metadata = {
  title: "회사 소개 - WithUp",
  description: "WithUp의 미션, 비전, 그리고 팀에 대해 알아보세요.",
};

export default function AboutPage() {
  return (
    <PageLayout
      title="회사 소개"
      description="WithUp이 추구하는 가치와 목표를 소개합니다."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">미션</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            WithUp은 지역 기반 스터디 매칭을 통해 누구나 쉽게 학습 목표를 달성하고, 
            성과를 이력으로 남길 수 있는 플랫폼을 만들어가는 것을 목표로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">비전</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            지역 기반 학습 커뮤니티의 접근성을 높이고, 신뢰할 수 있는 스터디 환경을 제공하며, 
            모든 학습자의 성취를 인정하는 생태계를 구축합니다.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">접근성</h3>
              <p className="text-blue-700">가까운 곳에서 스터디를 찾을 수 있습니다</p>
            </div>
            <div className="p-6 rounded-lg bg-purple-50">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">신뢰성</h3>
              <p className="text-purple-700">안전한 환경과 투명한 시스템을 제공합니다</p>
            </div>
            <div className="p-6 rounded-lg bg-green-50">
              <h3 className="text-xl font-semibold text-green-900 mb-2">성장</h3>
              <p className="text-green-700">모든 성취를 포트폴리오로 증명합니다</p>
            </div>
            <div className="p-6 rounded-lg bg-orange-50">
              <h3 className="text-xl font-semibold text-orange-900 mb-2">커뮤니티</h3>
              <p className="text-orange-700">지속 가능한 학습 커뮤니티를 만듭니다</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">역사</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">2024년</h3>
              <p className="text-gray-700">WithUp 설립 및 MVP 출시</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">목표</h3>
              <p className="text-gray-700">전국 스터디 커뮤니티로 확장</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
