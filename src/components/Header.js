'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            WithUp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/studies"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              스터디 찾기
            </Link>
            <Link
              href="/studies/create"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              스터디 개설
            </Link>
            <Link
              href="/my-page"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              마이페이지
            </Link>
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              로그인
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/studies"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              스터디 찾기
            </Link>
            <Link
              href="/studies/create"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              스터디 개설
            </Link>
            <Link
              href="/my-page"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              마이페이지
            </Link>
            <Link
              href="/login"
              className="block py-2 text-blue-600 font-semibold"
            >
              로그인
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

