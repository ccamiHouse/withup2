"use client";

import { useState } from "react";
import AudioWaveform from "./AudioWaveform";

export default function VoiceMessageCard({
  message = {
    id: 1,
    sender: "사용자",
    duration: 150, // 초 단위
    timestamp: "2024-12-19 14:30",
    isOwn: false,
  },
  className = "",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // 시간 포맷팅 함수
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // 재생/일시정지 토글
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // 실제 오디오 재생 로직은 추후 구현
  };

  // Seek bar 클릭 핸들러
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * message.duration;
    setCurrentTime(newTime);
  };

  return (
    <div
      className={`
      ${message.isOwn ? "ml-auto" : "mr-auto"}
      max-w-[70%] 
      card-dark
      p-4
      ${className}
    `}
    >
      {/* 발신자 정보 */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-white">
          {message.sender}
        </span>
        <span className="text-xs text-text-secondary">{message.timestamp}</span>
      </div>

      {/* 오디오 웨이브폼 */}
      <div className="mb-3">
        <AudioWaveform
          isPlaying={isPlaying}
          height="h-8"
          color="secondary-500"
        />
      </div>

      {/* 오디오 컨트롤 */}
      <div className="flex items-center space-x-3">
        {/* 재생/일시정지 버튼 */}
        <button
          onClick={togglePlay}
          className="
            w-8 h-8 
            bg-primary-500 hover:bg-primary-600 
            rounded-full 
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500/50
          "
          aria-label={isPlaying ? "일시정지" : "재생"}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {isPlaying ? (
              // 일시정지 아이콘
              <>
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </>
            ) : (
              // 재생 아이콘
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </button>

        {/* 시간 표시 */}
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(message.duration)}</span>
        </div>

        {/* Seek bar */}
        <div
          className="flex-1 h-2 bg-gray-600 rounded-full cursor-pointer relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-200"
            style={{ width: `${(currentTime / message.duration) * 100}%` }}
          />
        </div>
      </div>

      {/* 추가 액션 버튼들 */}
      <div className="flex items-center justify-end space-x-2 mt-2">
        <button
          className="
            text-xs text-text-secondary hover:text-text-white
            transition-colors duration-200
            focus:outline-none focus:ring-1 focus:ring-primary-500/50 rounded
            px-2 py-1
          "
          aria-label="다운로드"
        >
          다운로드
        </button>
        <button
          className="
            text-xs text-text-secondary hover:text-text-white
            transition-colors duration-200
            focus:outline-none focus:ring-1 focus:ring-primary-500/50 rounded
            px-2 py-1
          "
          aria-label="공유"
        >
          공유
        </button>
      </div>
    </div>
  );
}
