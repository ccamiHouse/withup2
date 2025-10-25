import PageLayout from "@/components/uncategorized/PageLayout";

export const metadata = {
  title: "개인정보 처리방침 - WithUp",
  description: "WithUp의 개인정보 처리방침을 확인하세요.",
};

export default function PrivacyPage() {
  return (
    <PageLayout
      title="개인정보 처리방침"
      description="WithUp은 개인정보 보호를 최우선으로 합니다."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (개인정보의 처리 목적)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            WithUp은 다음의 목적을 위하여 개인정보를 처리합니다:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>1. 서비스 제공: 스터디 매칭, 출석 관리, 포트폴리오 생성 등</li>
            <li>2. 회원 관리: 회원 가입의사 확인, 본인 확인, 불량회원의 부정 이용 방지</li>
            <li>3. 결제 및 환불 처리: 스터디룸 예약, 참가비 결제 및 환불</li>
            <li>4. 마케팅 및 광고: 맞춤형 서비스 제공, 이벤트 및 광고성 정보 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (개인정보의 처리 및 보유기간)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">회원 정보</h3>
              <p className="text-gray-700">보유기간: 회원 탈퇴 시까지</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">결제 정보</h3>
              <p className="text-gray-700">보유기간: 관련 법령에 의한 정보보유 기간 동안 (5년)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">로그 정보</h3>
              <p className="text-gray-700">보유기간: 3년</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (처리하는 개인정보의 항목)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">필수 항목</h3>
              <p className="text-gray-700">이름, 이메일, 비밀번호, 연락처, 위치 정보</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">선택 항목</h3>
              <p className="text-gray-700">프로필 사진, 관심사, 자기소개</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">자동 수집 항목</h3>
              <p className="text-gray-700">IP 주소, 쿠키, 접속 로그, 기기 정보</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (개인정보의 파기)</h2>
          <p className="text-gray-700 leading-relaxed">
            회원 탈퇴 시 즉시 파기하며, 전자적 파일 형태의 정보는 복구 및 재생되지 않도록 
            기술적 방법을 이용하여 완전히 삭제합니다. 다만 관련 법령에 의해 일정 기간 보존이 
            필요한 경우에는 해당 기간 동안 보관 후 파기합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제5조 (개인정보 보호책임자)</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 font-semibold mb-2">개인정보 보호책임자</p>
            <p className="text-gray-600">이름: WithUp 개인정보보호팀</p>
            <p className="text-gray-600">이메일: privacy@withup.com</p>
            <p className="text-gray-600">전화: 1588-0000</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제6조 (개인정보의 안전성 확보조치)</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 관리적 조치: 개인정보 처리 직원 최소화 및 교육 실시</li>
            <li>• 기술적 조치: 개인정보 처리시스템 등의 접근권한 관리, 접근통제시스템 설치</li>
            <li>• 물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            <li>• 암호화: 개인정보는 암호화를 통해 안전하게 저장 및 전송</li>
          </ul>
        </section>

        <section className="text-sm text-gray-500 pt-8 border-t">
          <p>최종 개정일: 2024년 12월</p>
          <p>본 방침은 2024년 12월부터 시행됩니다.</p>
        </section>
      </div>
    </PageLayout>
  );
}
