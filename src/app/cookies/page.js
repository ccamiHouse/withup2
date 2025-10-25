import PageLayout from "@/components/uncategorized/PageLayout";

export const metadata = {
  title: "쿠키 정책 - WithUp",
  description: "WithUp 쿠키 정책",
};

export default function CookiesPage() {
  return (
    <PageLayout title="쿠키 정책" description="쿠키 사용에 대한 정책을 안내합니다">
      <div className="space-y-8 prose max-w-none">
        <section>
          <h2>1. 쿠키란?</h2>
          <p>
            쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다. 
            이를 통해 사용자의 선호도와 방문 기록을 기억하여 더 나은 서비스를 제공할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>2. 쿠키의 사용 목적</h2>
          <p>WithUp은 다음과 같은 목적으로 쿠키를 사용합니다:</p>
          <ul>
            <li>로그인 상태 유지</li>
            <li>사용자 설정 저장</li>
            <li>서비스 개선을 위한 통계 수집</li>
            <li>맞춤형 콘텐츠 제공</li>
            <li>보안 및 사기 방지</li>
          </ul>
        </section>

        <section>
          <h2>3. 쿠키의 종류</h2>
          <h3>3.1 필수 쿠키</h3>
          <p>서비스의 기본 기능을 제공하기 위해 필수적으로 사용되는 쿠키입니다.</p>
          
          <h3>3.2 성능 쿠키</h3>
          <p>사용자의 방문 패턴을 분석하여 서비스를 개선하기 위해 사용됩니다.</p>
          
          <h3>3.3 기능 쿠키</h3>
          <p>사용자의 선호도와 설정을 기억하여 더 편리한 서비스를 제공하기 위해 사용됩니다.</p>
          
          <h3>3.4 마케팅 쿠키</h3>
          <p>사용자에게 관련성 높은 광고를 제공하기 위해 사용됩니다.</p>
        </section>

        <section>
          <h2>4. 쿠키 관리</h2>
          <p>
            대부분의 브라우저는 쿠키를 자동으로 허용하도록 설정되어 있습니다. 
            하지만 브라우저 설정을 통해 쿠키를 차단하거나 삭제할 수 있습니다. 
            단, 쿠키를 차단하면 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2>5. 쿠키 설정 변경 방법</h2>
          <p>주요 브라우저의 쿠키 설정 방법:</p>
          <ul>
            <li><strong>Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</li>
            <li><strong>Firefox:</strong> 옵션 &gt; 개인정보 보호 &gt; 쿠키 및 사이트 데이터</li>
            <li><strong>Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹 사이트 데이터</li>
          </ul>
        </section>

        <section>
          <h2>6. 문의</h2>
          <p>
            쿠키 정책에 대한 문의사항이 있으시면 언제든지 연락 주시기 바랍니다.
          </p>
          <p>Email: privacy@withup.com</p>
        </section>

        <section>
          <p className="text-sm text-gray-500">
            본 정책은 2024년 12월 20일에 마지막으로 업데이트되었습니다.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
