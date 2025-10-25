import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

export const metadata = {
  title: "고객 센터 - WithUp",
  description: "WithUp 고객 지원 센터",
};

export default function SupportPage() {
  const supportMethods = [
    {
      icon: MessageCircle,
      title: "채팅 지원",
      description: "실시간 온라인 채팅으로 빠른 상담을 받으세요",
      availability: "24시간 운영",
      response: "평균 응답 시간: 5분"
    },
    {
      icon: Mail,
      title: "이메일 지원",
      description: "이메일로 문의사항을 보내주시면 담당자가 답변드립니다",
      availability: "평일 09:00 - 18:00",
      response: "평균 응답 시간: 2시간"
    },
    {
      icon: Phone,
      title: "전화 지원",
      description: "전화로 상세한 상담을 받으실 수 있습니다",
      availability: "평일 09:00 - 18:00",
      response: "즉시 상담 가능"
    }
  ];

  const faqs = [
    {
      question: "회원가입은 어떻게 하나요?",
      answer: "메인 페이지 우측 상단의 '시작하기' 버튼을 클릭하여 간단한 정보를 입력하면 됩니다."
    },
    {
      question: "회비는 어떻게 관리되나요?",
      answer: "에스크로 시스템으로 안전하게 보관되며, 스터디 리더가 인증된 용도로 사용하면 자동 이전됩니다."
    },
    {
      question: "스터디를 어떻게 찾나요?",
      answer: "대시보드에서 지역, 카테고리, 키워드로 검색하거나 지도에서 직접 찾을 수 있습니다."
    }
  ];

  return (
    <PageLayout title="고객 센터" description="언제든지 도움을 드리겠습니다">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">연락 방법</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    {method.availability}
                  </div>
                  <p className="text-sm text-gray-600">{method.response}</p>
                  <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    시작하기
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">여전히 도움이 필요하신가요?</h2>
          <p className="text-gray-600 mb-6">
            아래 연락처로 문의해주시면 최선을 다해 도와드리겠습니다.
          </p>
          <div className="space-y-2 text-gray-700">
            <p>📧 Email: support@withup.com</p>
            <p>📞 Phone: 1588-0000</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
