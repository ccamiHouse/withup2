import PageLayout from "@/components/uncategorized/PageLayout";

export const metadata = {
  title: "지적재산권 - WithUp",
  description: "WithUp 지적재산권 정책",
};

export default function CopyrightPage() {
  return (
    <PageLayout title="지적재산권" description="지적재산권 보호 정책을 안내합니다">
      <div className="space-y-8 prose max-w-none">
        <section>
          <h2>1. 저작권</h2>
          <p>
            WithUp 웹사이트 및 서비스에 포함된 모든 콘텐츠(문자, 그림, 사진, 영상, 로고, 
            디자인 등)는 WithUp의 지적재산권으로 보호받습니다. 
            명시적인 허가 없이 복제, 배포, 전송, 수정, 출판, 판매할 수 없습니다.
          </p>
        </section>

        <section>
          <h2>2. 상표권</h2>
          <p>
            "WithUp" 상표는 WithUp의 등록상표입니다. 
            WithUp의 사전 서면 승인 없이 이 상표를 사용할 수 없습니다.
          </p>
        </section>

        <section>
          <h2>3. 사용자의 콘텐츠</h2>
          <p>
            사용자가 WithUp에 업로드한 콘텐츠의 저작권은 사용자에게 있습니다. 
            다만, 서비스 제공을 위해 필요한 범위 내에서 콘텐츠를 사용할 수 있는 권리를 
            WithUp에 부여하게 됩니다.
          </p>
        </section>

        <section>
          <h2>4. 이용 허가 범위</h2>
          <p>다음의 경우에 한하여 콘텐츠를 사용할 수 있습니다:</p>
          <ul>
            <li>개인적인 학습 및 연구 목적</li>
            <li>교육 목적 (비상업적)</li>
            <li>보도·비평을 위한 인용</li>
            <li>법령에서 허용하는 경우</li>
          </ul>
        </section>

        <section>
          <h2>5. 저작권 침해 신고</h2>
          <p>
            WithUp의 저작권이 침해되었다고 판단되는 경우, 
            다음 정보와 함께 저작권 침해 신고를 해주시기 바랍니다:
          </p>
          <ul>
            <li>침해된 작품의 명칭</li>
            <li>저작권자 정보</li>
            <li>침해 내용 및 근거</li>
            <li>연락처 정보</li>
          </ul>
          <p>Email: copyright@withup.com</p>
        </section>

        <section>
          <h2>6. 법적 대응</h2>
          <p>
            WithUp은 지적재산권을 중요하게 생각하며, 
            저작권 침해가 확인될 경우 관련 법령에 따라 적절한 조치를 취하겠습니다.
          </p>
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
