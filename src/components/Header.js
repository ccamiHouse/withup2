"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-dark-primary shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                theme === "dark" ? "/images/logo-dark.png" : "/images/logo.png"
              }
              alt="WithUp"
              width={120}
              height={40}
              className="h-8 w-auto hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/studies"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              스터디 찾기
            </Link>
            <Link
              href="/studies/create"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              스터디 개설
            </Link>
            <Link
              href="/my-page"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              마이페이지
            </Link>

            {/* 테마 토글 버튼 */}
            <button
              onClick={toggleTheme}
              className="
                w-10 h-10 
                bg-gray-100 dark:bg-dark-secondary 
                hover:bg-gray-200 dark:hover:bg-dark-tertiary
                rounded-full 
                flex items-center justify-center
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-primary-500/50
              "
              aria-label={
                theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"
              }
            >
              {theme === "dark" ? (
                // 태양 아이콘 (라이트 모드로 변경)
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                // 달 아이콘 (다크 모드로 변경)
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link
              href="/login"
              className="pill-button bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              로그인
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* 모바일 테마 토글 */}
            <button
              onClick={toggleTheme}
              className="
                w-8 h-8 
                bg-gray-100 dark:bg-dark-secondary 
                hover:bg-gray-200 dark:hover:bg-dark-tertiary
                rounded-full 
                flex items-center justify-center
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-primary-500/50
              "
              aria-label={
                theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"
              }
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-white dark:bg-dark-secondary rounded-lg p-4 shadow-lg">
            <Link
              href="/studies"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              스터디 찾기
            </Link>
            <Link
              href="/studies/create"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              스터디 개설
            </Link>
            <Link
              href="/my-page"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              마이페이지
            </Link>
            <Link
              href="/login"
              className="block py-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              로그인
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
