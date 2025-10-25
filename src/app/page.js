"use client";

import { useEffect } from "react";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import GuestHome from "@/components/modules/GuestHome";
import LoggedInHome from "@/components/modules/LoggedInHome";
import { useAuth } from "@/hooks/useAuth";
import HomePage from "@/app/home/page";

export default function Home() {
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    const handleAnchorClick = (e) => {
      // 클릭한 요소가 앵커 링크인지 확인
      const anchor = e.target.closest('a[href^="#"]');
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offset = 80; // 헤더 높이
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // 모든 앵커 링크에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // 로딩 중일 때는 표시하지 않음
  if (isLoading) {
    return null;
  }

  return (
    <div className={`min-h-screen ${isLoggedIn ? 'bg-gray-50' : 'bg-white'}`}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
