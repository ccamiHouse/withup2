"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VoiceButton({
  isRecording = false,
  onClick,
  size = "default",
  disabled = false,
  className = "",
}) {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    small: "w-10 h-10",
    default: "w-14 h-14", // 더 적당한 크기
    large: "w-18 h-18",
  };

  const iconSizes = {
    small: "w-5 h-5",
    default: "w-6 h-6",
    large: "w-8 h-8",
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        bg-primary-500 hover:bg-primary-600 
        active:bg-primary-700 
        disabled:bg-gray-400 disabled:cursor-not-allowed
        rounded-full 
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-primary-500/50
        shadow-sm hover:shadow-md
        ${className}
      `}
      aria-label={isRecording ? "녹음 중지" : "음성 녹음 시작"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isRecording ? { scale: [1, 1.02, 1] } : {}}
      transition={{
        duration: 1.5,
        repeat: isRecording ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      {/* 마이크 아이콘 */}
      <motion.svg
        className={`${iconSizes[size]} text-white`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        animate={isRecording ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{
          duration: 2,
          repeat: isRecording ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {isRecording ? (
          // 녹음 중일 때 정사각형 아이콘
          <rect x="6" y="6" width="12" height="12" rx="2" />
        ) : (
          // 일반 상태일 때 마이크 아이콘
          <>
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </>
        )}
      </motion.svg>
    </motion.button>
  );
}
