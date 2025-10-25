import PageLayout from "@/components/uncategorized/PageLayout";

export const metadata = {
  title: "이용약관 - WithUp",
  description: "WithUp 서비스 이용약관을 확인하세요.",
};

export default function TermsPage() {
  return (
    <PageLayout
      title="이용약관"
      description="WithUp 서비스 이용약관입니다."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (목적)</h2>
          <p className="text-gray-700 leading-relaxed">
            본 약관은 WithUp(이하 "회사")이 제공하는 지역 기반 스터디 매칭 서비스의 
            이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (정의)</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span>•</span>
              <span>"서비스"란 회사가 제공하는 스터디 매칭, 출석 관리, 포트폴리오 생성 등 모든 서비스를 말합니다.</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>"회원"이란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>"스터디"란 회원들이 생성한 학습 모임을 말합니다.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (약관의 게시와 개정)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 
            회사는 필요하다고 인정되는 경우 본 약관을 개정할 수 있으며, 
            약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 
            서비스 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (서비스의 제공 및 변경)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 다음과 같은 서비스를 제공합니다:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>1. 지역 기반 스터디 매칭 서비스</li>
            <li>2. 출석 및 과제 인증 서비스</li>
            <li>3. 성과 포트폴리오 자동 생성 서비스</li>
            <li>4. 스터디룸 예약 및 결제 서비스</li>
            <li>5. 기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제5조 (회원의 의무)</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span>•</span>
              <span>회원은 회사가 정한 본 약관 및 운영정책을 준수하여야 합니다.</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>회원은 타인의 개인정보를 도용하거나 허위 정보를 제공해서는 안 됩니다.</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>회원은 서비스를 이용하여 부당한 이익을 취하거나 다른 회원에게 피해를 주어서는 안 됩니다.</span>
            </li>
          </ul>
        </section>

        <section className="text-sm text-gray-500 pt-8 border-t">
          <p>최종 개정일: 2024년 12월</p>
          <p>본 약관은 2024년 12월부터 시행됩니다.</p>
        </section>
      </div>
    </PageLayout>
  );
}
