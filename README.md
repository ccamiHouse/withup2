# WithUp - 지역 기반 스터디 매칭 플랫폼

WithUp은 지역 기반 스터디 매칭 플랫폼으로, 학습 목표를 달성하고 성과 포트폴리오를 자동 생성하는 서비스입니다.

## 🚀 기술 스택

- **Framework**: Next.js 16.0.0 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, React Icons
- **Language**: JavaScript

## 📦 패키지 버전

```json
{
  "next": "16.0.0",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4"
}
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
withup3/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── Features.js
│   ├── HowItWorks.js
│   ├── Stats.js
│   ├── CTA.js
│   └── Footer.js
├── docs/                  # Documentation
│   └── withup.prd         # Product Requirements Document
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Dependencies
```

## 🎨 주요 기능

- ✅ 지역 기반 스터디 매칭
- ✅ 성과 포트폴리오 자동 생성
- ✅ 안전한 회비 관리
- ✅ 상호 평가 시스템
- ✅ 출석/과제 인증
- ✅ 성취 배지 시스템
- ✅ 공간 대여 통합 결제
- ✅ 참여율 관리

## 🎯 핵심 가치 제안

- **접근성**: 지역 기반 매칭으로 참여 접근성 강화
- **이력화**: 스터디 결과물을 성과 포트폴리오로 자동 생성
- **신뢰성**: 상호 평가 기반 신뢰 시스템 및 안전한 회비 관리
- **지속성**: 배지/포인트 기반 게이미피케이션으로 지속적 참여 유도

## 📄 라이센스

This project is private and confidential.
