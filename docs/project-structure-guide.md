# 프로젝트 구조 가이드

## 📁 디렉토리 구조

```
withup2/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API 라우트
│   │   ├── globals.css   # 전역 스타일
│   │   ├── layout.js     # 루트 레이아웃
│   │   └── page.js       # 홈페이지
│   ├── components/       # 컴포넌트 라이브러리
│   │   ├── atoms/        # 원자 단위 컴포넌트
│   │   ├── modules/      # 모듈 컴포넌트
│   │   ├── templates/    # 템플릿 컴포넌트
│   │   └── uncategorized/ # 분류되지 않은 컴포넌트
│   └── utils/            # 유틸리티 함수
│       └── kakaoAuth.js  # 카카오 인증 유틸
├── public/               # 정적 파일
├── docs/                 # 문서
└── .cursor/             # Cursor IDE 설정
```

## 🎯 컴포넌트 분류 (Atomic Design)

### Atoms (원자)
- 가장 작은 단위의 재사용 가능한 컴포넌트
- 더 이상 분해할 수 없는 기본 컴포넌트
- 예시: Button, Input, Text, Icon

### Modules (모듈)
- 여러 atoms를 조합한 복합 컴포넌트
- 특정 기능을 수행하는 컴포넌트
- 예시: Hero, Features, HowItWorks, Stats, CTA

### Templates (템플릿)
- 페이지 레이아웃을 담당하는 컴포넌트
- 여러 페이지에서 공통으로 사용
- 예시: Header, Footer

### Uncategorized (미분류)
- 아직 적절한 카테고리가 없는 컴포넌트
- 시간이 지나면 적절한 카테고리로 이동
- 예시: MapComponent, PageLayout, ScrollToTop, SmoothScrollLink

## 📝 절대 경로 사용

### jsconfig.json 설정
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"]
    }
  }
}
```

### 사용 예시
```javascript
// ✅ 절대 경로 사용 (권장)
import Header from "@/components/templates/Header";
import { kakaoLogin } from "@/utils/kakaoAuth";

// ❌ 상대 경로 사용 (지양)
import Header from "../../../components/Header";
```

## 🎨 스타일링

### Tailwind CSS
- 유틸리티 클래스 기반 스타일링
- 반응형 디자인: `md:`, `lg:` 브레이크포인트 사용
- 조건부 스타일: `${isActive ? 'bg-blue-500' : 'bg-gray-500'}`

## 📦 의존성

### 주요 패키지
- **Next.js 16**: React 프레임워크
- **React 19**: UI 라이브러리
- **Tailwind CSS 4**: CSS 프레임워크
- **Lucide React**: 아이콘 라이브러리
- **React Icons**: 추가 아이콘

## 🔧 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 린트 실행
npm run lint
```

## 📚 규칙 문서

- [절대 경로 규칙](.cursor/rules/absolute_path_rules.md)
- [컴포넌트 규칙](.cursor/rules/component_rules.md)
- [폴더 구조 규칙](.cursor/rules/folder_structure_rules.md)
- [Git 워크플로우](.cursor/rules/git-workflow.md)
- [Redux 규칙](.cursor/rules/redux_rules.md)
- [Saga 금지 규칙](.cursor/rules/no-saga-rules.md)
