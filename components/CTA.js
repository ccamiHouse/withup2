"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          지역 기반 스터디로 목표를 달성하고, 성과 포트폴리오를 만들어보세요
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center mb-12">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-xl">
            무료로 시작하기
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white hover:bg-white/10">
            데모 보기
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 pt-12 border-t border-white/20">
          {[
            "무료 가입",
            "초기 설정 지원",
            "취소 가능"
          ].map((text, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
