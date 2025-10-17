"use client";

import { motion } from "framer-motion";

export default function AudioWaveform({
  isPlaying = false,
  height = "h-10",
  color = "secondary-500",
  className = "",
}) {
  // 정적 웨이브폼 데이터 (실제 오디오 분석은 추후 구현)
  const waveformData = [0.3, 0.7, 0.4, 0.9, 0.6, 0.8, 0.5, 0.3, 0.6, 0.4];

  return (
    <div
      className={`flex items-end justify-center space-x-1 ${height} ${className}`}
    >
      {waveformData.map((amplitude, index) => (
        <motion.div
          key={index}
          className={`
            bg-${color} 
            w-1 
            rounded-full
          `}
          style={{
            height: `${amplitude * 100}%`,
          }}
          animate={isPlaying ? { scaleY: [1, 1.3, 1] } : { scaleY: 1 }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
