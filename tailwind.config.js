/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Loud.kr 색상 팔레트
        primary: {
          50: "#fff5f5",
          100: "#ffe5e5",
          200: "#ffd1d1",
          300: "#ffb3b3",
          400: "#ff8a8a",
          500: "#E53E3E", // 더 자연스러운 빨강
          600: "#c53030",
          700: "#9c2626",
          800: "#822727",
          900: "#742a2a",
        },
        secondary: {
          50: "#f0fdfc",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#38B2AC", // 더 자연스러운 청록색
          600: "#319795",
          700: "#2c7a7b",
          800: "#285e61",
          900: "#234e52",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#D69E2E", // 더 자연스러운 노란색
          600: "#b7791f",
          700: "#975a16",
          800: "#744210",
          900: "#5f370e",
        },
        // 다크 모드 색상
        dark: {
          primary: "#0F172A", // 더 자연스러운 다크 블루
          secondary: "#1E293B", // 어두운 슬레이트
          tertiary: "#334155", // 중간 슬레이트
        },
        // 텍스트 색상
        text: {
          primary: "#2C3E50", // Dark Blue-Gray
          secondary: "#7F8C8D", // Medium Gray
          accent: "#E74C3C", // Red for notifications
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "Roboto", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
