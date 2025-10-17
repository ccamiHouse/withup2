import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark-primary text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="WithUp"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-300">
              함께 성장하는 스터디 모임 플랫폼
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/studies"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  스터디 찾기
                </Link>
              </li>
              <li>
                <Link
                  href="/studies/create"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  스터디 개설
                </Link>
              </li>
              <li>
                <Link
                  href="/my-page"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  마이페이지
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  도움말
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">정보</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  회사소개
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
          <p>&copy; 2025 WithUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
