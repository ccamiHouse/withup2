"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Award, Shield, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Award className="h-4 w-4" />
              지역 기반 스터디 매칭 플랫폼
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              목표를 달성하는
              <br />
              <span className="text-blue-600">스터디 경험</span>을 시작하세요
            </h1>
            
            <p className="mb-8 text-xl text-gray-600">
              지역 기반 스터디 매칭으로 학습 목표를 달성하고, 
              성과 포트폴리오와 배지를 자동 생성하세요.
            </p>
            
            <div className="mb-8 space-y-3">
              {[
                "지역 기반 매칭으로 접근성 향상",
                "성과 포트폴리오 자동 생성",
                "안전한 회비 관리",
                "상호 평가 기반 신뢰 시스템"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg">
                무료로 시작하기
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-400">
                더 알아보기
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Mockup Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white">스터디 매칭</h3>
                  <p className="text-sm text-blue-100">근처 스터디를 찾아보세요</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">React 스터디</h4>
                            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-3 w-3" />
                              강남역 500m
                            </p>
                            <div className="mt-2 flex gap-2">
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                온라인
                              </span>
                              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                                3명 참여중
                              </span>
                            </div>
                          </div>
                          <Award className="h-5 w-5 text-yellow-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 hidden h-32 w-32 rounded-full bg-purple-200 opacity-50 blur-3xl lg:block"></div>
              <div className="absolute -bottom-4 -left-4 hidden h-32 w-32 rounded-full bg-blue-200 opacity-50 blur-3xl lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
