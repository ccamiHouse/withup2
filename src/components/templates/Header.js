"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Award, Users, Shield, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoggedIn, isLoading, logout } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/30 to-white pointer-events-none"></div>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-all">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg transition-transform group-hover:scale-110 group-hover:shadow-xl">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WithUp
            </span>
            <span className="text-xs text-gray-500 -mt-1">스터디 매칭</span>
          </div>
        </Link>

        {/* Desktop Navigation */}

        {isLoggedIn ? (
          <>
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
              >
                <User className="h-4 w-4" />
                내 정보
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                로그아웃
              </button>
            </div>
          </>
        ) : (
          <> 
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/home" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600">
                홈
              </Link>
              <Link href="/intro" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600">
                소개
              </Link>
              <a href="/intro#features" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600">
                기능
              </a>
              <a href="/intro#how-it-works" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600">
                이용 방법
              </a>
              <a href="/intro#stats" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600">
                성과
              </a>
              <div className="mx-2 h-6 w-px bg-gray-300"></div>
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
              >
                <User className="h-4 w-4" />
                로그인
              </Link>
              <Link href="/signup" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105">
                시작하기
              </Link>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 hover:bg-gray-100 transition-colors md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden animate-slide-in">
          <div className="flex flex-col gap-2 px-4 py-4">
            {isLoggedIn ? (
              <>
                <Link href="/" className="flex items-center gap-2 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <User className="h-4 w-4" />
                  내 정보
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link href="/home" className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  홈
                </Link>
                <Link href="/intro" className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  소개
                </Link>
                <a href="/intro#features" className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  기능
                </a>
                <a href="/intro#how-it-works" className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  이용 방법
                </a>
                <a href="/intro#stats" className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  성과
                </a>
                <div className="my-2 border-t border-gray-200"></div>
                <Link href="/login" className="flex items-center gap-2 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <User className="h-4 w-4" />
                  로그인
                </Link>
                <Link href="/signup" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold text-white shadow-md">
                  시작하기
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
