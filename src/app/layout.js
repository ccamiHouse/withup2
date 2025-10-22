import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "WithUp - 스터디 모임 플랫폼",
  description: "원하는 스터디 모임을 쉽게 개설하고 참여하세요",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
