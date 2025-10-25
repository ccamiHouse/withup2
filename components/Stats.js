"use client";

import Link from "next/link";
import { TrendingUp, Users, Award, MapPin, Star, Shield } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: MapPin,
      value: "80%",
      label: "지역 매칭 성공률",
      change: "+5%",
      color: "blue"
    },
    {
      icon: Award,
      value: "60%",
      label: "포트폴리오 발급률",
      change: "+8%",
      color: "purple"
    },
    {
      icon: Star,
      value: "70%",
      label: "배지 생성률",
      change: "+12%",
      color: "yellow"
    },
    {
      icon: Users,
      value: "50%",
      label: "재참여율",
      change: "+15%",
      color: "green"
    },
    {
      icon: TrendingUp,
      value: "10%",
      label: "리더 전환율",
      change: "+3%",
      color: "orange"
    },
    {
      icon: Shield,
      value: "4.5★",
      label: "평균 상호 평가",
      change: "+0.3",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            성과 지표
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            실적 기반으로 검증된 WithUp의 성공 지표를 확인하세요
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${getColorClasses(stat.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {stat.change}
                  </span>
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            더 많은 스터디 참여자들이 성과를 달성하고 있습니다
          </p>
          <Link href="/signup" className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors">
            지금 시작하기
          </Link>
        </div>
      </div>
    </section>
  );
}
