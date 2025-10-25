"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SidejobApplyPage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  // TODO: 실제로는 API에서 사이드잡 정보를 가져와야 함
  const sidejob = {
    1: {
      title: "토익 과외 선생님 모집",
      description: "토익 700~800점대 학생 대상 과외",
      pay: "시간당 3만원",
      type: "튜터링",
      company: "ABC 교육센터",
      location: "강남구",
      period: "3개월 (주 2회)",
      requirements: [
        "토익 900점 이상 보유자",
        "과외 또는 강의 경험 우대",
        "성실하고 책임감 있는 분",
      ],
    },
    2: {
      title: "파이썬 강의 보조",
      description: "온라인 파이썬 강의 질의응답 보조",
      pay: "월 50만원",
      type: "강의",
      company: "XYZ 온라인 교육",
      location: "온라인 (재택)",
      period: "6개월",
      requirements: [
        "Python 중급 이상 실력",
        "커뮤니케이션 능력 우수자",
        "평일 저녁 시간 가능자",
      ],
    },
  }[id];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availableDate: "",
    motivation: "",
    experience: "",
    portfolio: "",
    questions: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 크기 체크 (5MB 제한)
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB를 초과할 수 없습니다.");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: 실제 API 호출
    console.log("지원 데이터:", {
      sidejobId: id,
      ...formData,
      resume: resumeFile?.name,
    });

    setTimeout(() => {
      setIsLoading(false);
      alert("지원이 완료되었습니다!");
      router.push("/my-page");
    }, 1500);
  };

  if (!sidejob) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              사이드잡을 찾을 수 없습니다
            </h1>
            <Link
              href="/my-page"
              className="text-primary-500 hover:text-primary-600"
            >
              마이페이지로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-dark-primary py-12 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 뒤로가기 */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 mb-6 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            돌아가기
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 사이드잡 정보 */}
            <div className="card-light dark:card-dark p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <span className="bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 text-sm font-semibold px-3 py-1 rounded-full">
                  {sidejob.type}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {sidejob.title}
              </h1>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>{sidejob.company}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{sidejob.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold text-primary-500">
                    {sidejob.pay}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{sidejob.period}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  업무 내용
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {sidejob.description}
                </p>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  자격 요건
                </h3>
                <ul className="space-y-2">
                  {sidejob.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 지원서 작성 폼 */}
            <div className="card-light dark:card-dark p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                지원서 작성
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 기본 정보 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="availableDate"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      시작 가능일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="availableDate"
                      name="availableDate"
                      value={formData.availableDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                    />
                  </div>
                </div>

                {/* 지원 동기 */}
                <div>
                  <label
                    htmlFor="motivation"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    지원 동기 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors resize-none"
                    placeholder="이 사이드잡에 지원하는 이유를 작성해주세요. (최소 50자)"
                    minLength={50}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formData.motivation.length} / 최소 50자
                  </p>
                </div>

                {/* 관련 경험 */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    관련 경험 및 역량 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors resize-none"
                    placeholder="관련 경험이나 보유 역량을 구체적으로 작성해주세요."
                    minLength={50}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formData.experience.length} / 최소 50자
                  </p>
                </div>

                {/* 포트폴리오 링크 */}
                <div>
                  <label
                    htmlFor="portfolio"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    포트폴리오 링크 (선택)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors"
                    placeholder="https://..."
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    GitHub, 블로그, 노션 등의 링크를 입력해주세요.
                  </p>
                </div>

                {/* 이력서 첨부 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    이력서 첨부 (선택)
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex-1 cursor-pointer">
                      <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-500 transition-colors text-center">
                        <svg
                          className="w-8 h-8 mx-auto mb-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {resumeFile
                            ? resumeFile.name
                            : "파일을 선택하거나 드래그하세요"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          PDF, DOC, DOCX (최대 5MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* 문의사항 */}
                <div>
                  <label
                    htmlFor="questions"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    문의사항 (선택)
                  </label>
                  <textarea
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-secondary dark:text-white transition-colors resize-none"
                    placeholder="궁금한 점이나 문의사항을 자유롭게 작성해주세요."
                  />
                </div>

                {/* 안내 메시지 */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      <p className="font-semibold mb-1">지원 전 확인사항</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>지원서 제출 후 수정이 불가능합니다.</li>
                        <li>검토 결과는 3~5일 이내에 이메일로 안내됩니다.</li>
                        <li>허위 정보 기재 시 불이익이 있을 수 있습니다.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 제출 버튼 */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                  >
                    취소
                  </button>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? "제출 중..." : "지원서 제출"}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

