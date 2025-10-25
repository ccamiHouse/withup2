import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "WithUp - 지역 기반 스터디 매칭 플랫폼",
  description: "지역 기반 스터디 매칭으로 학습 목표를 달성하고, 성과 포트폴리오를 자동 생성하세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
