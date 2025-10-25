import PageLayout from "@/components/uncategorized/PageLayout";
import { CheckCircle, AlertCircle, Clock, TrendingUp } from "lucide-react";

export const metadata = {
  title: "서비스 상태 - WithUp",
  description: "WithUp 서비스 상태",
};

export default function StatusPage() {
  const services = [
    {
      name: "API 서버",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms"
    },
    {
      name: "데이터베이스",
      status: "operational",
      uptime: "99.8%",
      responseTime: "45ms"
    },
    {
      name: "인증 서비스",
      status: "operational",
      uptime: "99.9%",
      responseTime: "80ms"
    },
    {
      name: "결제 처리",
      status: "operational",
      uptime: "99.7%",
      responseTime: "150ms"
    },
    {
      name: "이메일 서비스",
      status: "operational",
      uptime: "99.5%",
      responseTime: "200ms"
    },
    {
      name: "파일 저장소",
      status: "operational",
      uptime: "99.6%",
      responseTime: "100ms"
    }
  ];

  const incidents = [
    {
      date: "2024-12-15",
      title: "지도 서비스 일시적 지연",
      status: "resolved",
      duration: "15분"
    },
    {
      date: "2024-12-10",
      title: "예정된 유지보수",
      status: "resolved",
      duration: "2시간"
    }
  ];

  return (
    <PageLayout title="서비스 상태" description="WithUp의 현재 서비스 상태를 확인하세요">
      <div className="space-y-8">
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">모든 시스템 정상 운영 중</h2>
              <p className="text-gray-600">모든 서비스가 정상적으로 작동하고 있습니다.</p>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6">서비스별 상태</h3>
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {service.status === "operational" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="font-semibold text-gray-900">{service.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    정상
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>가동률: {service.uptime}</div>
                  <div>응답 시간: {service.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            최근 사건
          </h3>
          <div className="space-y-4">
            {incidents.map((incident, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">{incident.date}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        해결됨
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{incident.title}</h4>
                  </div>
                  <span className="text-sm text-gray-500">지속: {incident.duration}</span>
                </div>
                <p className="text-sm text-gray-600">
                  문제가 감지되었지만 이미 해결되었습니다.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            통계
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <div className="text-3xl font-bold text-blue-600">99.8%</div>
              <div className="text-sm text-gray-600">평균 가동률 (지난 30일)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">정기 유지보수 (지난 30일)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">&lt;150ms</div>
              <div className="text-sm text-gray-600">평균 응답 시간</div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-gray-600 mb-4">
            서비스 상태에 대한 알림을 받고 싶으시다면 이메일을 구독하세요.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            상태 알림 구독하기
          </button>
        </section>
      </div>
    </PageLayout>
  );
}
