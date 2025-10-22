"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StudyCard({ study }) {
  const {
    id,
    title,
    description,
    category,
    location,
    period,
    currentMembers,
    maxMembers,
    isOnline,
  } = study;

  return (
    <Link href={`/studies/${id}`}>
      <motion.div
        className="card-dark dark:card-dark card-light hover:shadow-lg transition-shadow duration-200 p-6 h-full cursor-pointer group"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
          {isOnline && (
            <span className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-sm font-semibold px-3 py-1 rounded-full">
              온라인
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 line-clamp-1 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Info */}
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
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
            {location}
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
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
            {period}
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            {currentMembers} / {maxMembers}명
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentMembers / maxMembers) * 100}%` }}
            ></div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
