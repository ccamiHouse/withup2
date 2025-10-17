# WithUp - 스터디 모임 플랫폼

함께 성장하는 스터디 모임 플랫폼입니다.

## 기능

### MVP (1단계)

- ✅ 스터디 개설 및 모집
- ✅ 지역/공간 기반 매칭
- ✅ 스터디 찾기 및 필터링
- ✅ 운영 관리 기본 기능 (출석, 일정, 공지, 역할 분담)
- ✅ 마이페이지 (참여/개설 스터디 관리)
- ✅ 사이드잡 연결 기본 기능

## 기술 스택

- **Framework**: Next.js 15.0.2
- **Language**: JavaScript
- **Styling**: Tailwind CSS 3.4.17
- **UI Library**: React 18.3.1

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run
build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
withup2/
├── src/
│   ├── app/
│   │   ├── layout.js          # 루트 레이아웃
│   │   ├── page.js             # 홈 페이지
│   │   ├── globals.css         # 전역 스타일
│   │   ├── studies/
│   │   │   ├── page.js         # 스터디 목록
│   │   │   ├── create/
│   │   │   │   └── page.js     # 스터디 개설
│   │   │   └── [id]/
│   │   │       └── page.js     # 스터디 상세
│   │   └── my-page/
│   │       └── page.js         # 마이페이지
│   └── components/
│       ├── Header.js           # 헤더 컴포넌트
│       ├── Footer.js           # 푸터 컴포넌트
│       └── StudyCard.js        # 스터디 카드 컴포넌트
├── doc/
│   └── withup.prd              # 프로덕트 요구사항 문서
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 주요 페이지

- `/` - 홈 페이지 (추천 스터디, 주요 기능 소개)
- `/studies` - 스터디 찾기 (필터링 기능)
- `/studies/create` - 스터디 개설
- `/studies/[id]` - 스터디 상세 정보
- `/my-page` - 마이페이지 (참여/개설 스터디, 사이드잡)

## 개발 가이드

### 컴포넌트 생성

공통 컴포넌트는 `src/components/` 디렉토리에 생성합니다.

### 페이지 생성

페이지는 `src/app/` 디렉토리 구조에 따라 자동으로 라우팅됩니다.

### 스타일링

Tailwind CSS를 사용하여 스타일링합니다. `tailwind.config.js`에서 테마를 커스터마이징할 수 있습니다.

## 향후 계획

### 2단계

- 자료 공유 (채팅/파일 업로드)
- 활동 기록 시스템
- 고도화된 추천 알고리즘
- 사이드잡 연계 확대

### 3단계

- 포트폴리오 자동 생성
- 기업 파트너십
- 커뮤니티 강화

## 라이선스

MIT
