"use client";

import { useEffect } from "react";
import Header from "@/components/templates/Header";
import Hero from "@/components/modules/Hero";
import Features from "@/components/modules/Features";
import HowItWorks from "@/components/modules/HowItWorks";
import Stats from "@/components/modules/Stats";
import CTA from "@/components/modules/CTA";
import Footer from "@/components/templates/Footer";

export default function Intro() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
