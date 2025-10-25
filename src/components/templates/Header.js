"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMenuOpen(false); // 모바일 메뉴 닫기
    }
  };

  return (
    <header className="bg-white dark:bg-dark-primary shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="WithUp"
              width={120}
              height={40}
              className="h-8 w-auto hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Search Bar - Desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="스터디 검색..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
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

            {/* 로그인 상태에 따른 버튼 */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user?.nickname?.charAt(0) || 'U'}
                  </div>
                  <span className="hidden sm:block">{user?.nickname || '사용자'}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* 사용자 메뉴 드롭다운 */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-50">
                    <div className="py-1">
                      <Link
                        href="/my-page"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        마이페이지
                      </Link>
                      <button
                        onClick={async () => {
                          try {
                            // axios를 사용한 로그아웃 API 호출
                            const { api } = await import('@/utils/api');
                            await api.post('/api-logined/auth/logout');
                            
                            logout();
                            setIsUserMenuOpen(false);
                            window.location.reload();
                          } catch (error) {
                            console.error('로그아웃 실패:', error);
                            // 에러가 발생해도 로컬 상태는 로그아웃 처리
                            logout();
                            setIsUserMenuOpen(false);
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary"
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="pill-button bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                로그인
              </Link>
            )}
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
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="스터디 검색..."
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-tertiary dark:text-white transition-colors"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

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
            {isLoggedIn ? (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                로그아웃
              </button>
            ) : (
              <Link
                href="/login"
                className="block py-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                로그인
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
