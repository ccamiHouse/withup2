import './globals.css';

export const metadata = {
  title: 'WithUp - 스터디 모임 플랫폼',
  description: '원하는 스터디 모임을 쉽게 개설하고 참여하세요',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}

