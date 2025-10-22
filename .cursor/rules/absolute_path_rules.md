# 절대 경로 설정 및 사용 규칙

## 프로젝트 개요
이 프로젝트는 Next.js에서 절대 경로를 사용하여 모듈 임포트의 가독성과 유지보수성을 향상시킵니다.
- **jsconfig.json**: 절대 경로 별칭 설정
- **Next.js**: 자동으로 jsconfig.json의 경로 설정 인식
- **일관된 임포트**: 모든 모듈에서 절대 경로 사용

## 절대 경로 설정

### jsconfig.json 설정
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@styles/*": ["./src/styles/*"],
      "@utils/*": ["./src/utils/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@redux/*": ["./src/redux/*"],
      "@api/*": ["./src/api/*"],
      "@public/*": ["./public/*"],  
      "@providers/*": ["./src/providers/*"],
      "@enums/*": ["./src/enums/*"]
    }
  }
}
```

### 설정 설명
- **baseUrl**: 프로젝트 루트 디렉토리 설정
- **paths**: 절대 경로 별칭과 실제 경로 매핑
- **@/**: src 디렉토리의 모든 하위 경로
- **@components/**: 컴포넌트 디렉토리 전용 별칭
- **@redux/**: Redux 관련 파일 전용 별칭
- **@utils/**: 유틸리티 함수 전용 별칭

## 절대 경로 사용 규칙

### 1. 기본 절대 경로 (@/)

#### 사용법
```javascript
// src 디렉토리 내의 모든 파일에 접근
import { API_URL } from "@/api/apis";
import { showToast } from "@/utils/toast/toast";
import { isEmpty } from "@/utils/isEmpty";
import logger from "@/utils/logger/logger";
```

#### 규칙
- **가장 많이 사용**: 모든 임포트에서 기본적으로 사용
- **간단한 경로**: src 내의 모든 파일에 접근 가능
- **일관성**: 프로젝트 전체에서 일관된 사용

### 2. 도메인별 절대 경로

#### @redux/ 경로
```javascript
// Redux 관련 파일 임포트
import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '@/redux/reducers/foodReducer';
import rootSaga from '@/saga/rootSaga';
import rootReducer from './reducers/rootReducer';
```

#### @api/ 경로
```javascript
// API 관련 파일 임포트
import { API_URL } from "@/api/apis";
```

#### @utils/ 경로
```javascript
// 유틸리티 함수 임포트
import { showToast } from '@/utils/toast/toast';
import logEntries from '@/utils/logEntries.js';
```


### 3. 임포트 순서 규칙

#### 표준 임포트 순서
```javascript
// 1. 외부 라이브러리
import { configureStore } from '@reduxjs/toolkit';

// 2. 프로젝트 내부 모듈 (절대 경로)
import { API_URL } from "@/api/apis";
import { showToast } from '@/utils/toast/toast';

// 3. 상대 경로 (같은 디렉토리 내)
import rootReducer from './reducers/rootReducer';
```

#### 규칙
- **외부 라이브러리**: npm 패키지 먼저
- **절대 경로**: 프로젝트 내부 모듈
- **상대 경로**: 같은 디렉토리 내 파일
- **빈 줄로 구분**: 각 그룹 사이에 빈 줄 추가

### 4. 파일 확장자 규칙

#### 확장자 포함
```javascript
// .js 파일은 확장자 포함
import logEntries from '@/utils/logEntries.js';
import { isEmpty } from '@/utils/isEmpty.js';
```

#### 확장자 생략
```javascript
// 대부분의 경우 확장자 생략 가능
import { API_URL } from "@/api/apis";
import { showToast } from '@/utils/toast/toast';
```

#### 규칙
- **일관성**: 프로젝트 전체에서 일관된 방식 사용
- **명확성**: 모호한 경우 확장자 포함
- **Next.js**: 자동으로 확장자 해석

### 5. 경로 별칭 사용 패턴

#### 현재 사용 중인 패턴
- **@/**: 가장 많이 사용되는 기본 경로
- **@redux/**: Redux 관련 파일
- **@api/**: API 관련 파일
- **@utils/**: 유틸리티 함수

#### 사용하지 않는 패턴
- **@components/**: 설정되어 있지만 실제 사용 안 함
- **@styles/**: 설정되어 있지만 실제 사용 안 함
- **@hooks/**: 설정되어 있지만 실제 사용 안 함
- **@public/**: 설정되어 있지만 실제 사용 안 함
- **@providers/**: 설정되어 있지만 실제 사용 안 함
- **@enums/**: 설정되어 있지만 실제 사용 안 함

### 6. 상대 경로 vs 절대 경로

#### 절대 경로 사용 (권장)
```javascript
// 다른 디렉토리의 파일
import { API_URL } from "@/api/apis";
import { showToast } from '@/utils/toast/toast';
import foodReducer from '@/redux/reducers/foodReducer';
```

#### 상대 경로 사용 (제한적)
```javascript
// 같은 디렉토리 내의 파일
import rootReducer from './reducers/rootReducer';
```

#### 규칙
- **절대 경로 우선**: 가능한 한 절대 경로 사용
- **상대 경로 제한**: 같은 디렉토리 내에서만 사용
- **일관성**: 프로젝트 전체에서 일관된 방식 사용

### 7. Next.js 설정 연동

#### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  // jsconfig.json의 경로 설정을 자동으로 인식
};

export default nextConfig;
```

#### 규칙
- **자동 인식**: Next.js가 jsconfig.json을 자동으로 읽음
- **추가 설정 불필요**: 별도의 webpack 설정 불필요
- **개발/프로덕션**: 모든 환경에서 동일하게 작동

### 8. IDE 지원

#### VS Code 설정
```json
// .vscode/settings.json (선택사항)
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true
}
```

#### 규칙
- **자동 완성**: IDE에서 절대 경로 자동 완성 지원
- **IntelliSense**: 경로 오타 방지
- **리팩토링**: 파일 이동 시 자동 경로 업데이트

### 9. 성능 고려사항

#### 번들 크기 최적화
- **Tree Shaking**: 사용하지 않는 코드 자동 제거
- **코드 분할**: 페이지별 코드 분할
- **캐싱**: 절대 경로로 인한 캐싱 효율성

#### 규칙
- **불필요한 임포트**: 사용하지 않는 모듈 임포트 방지
- **순환 의존성**: 절대 경로 사용 시 순환 의존성 주의
- **번들 분석**: 정기적인 번들 크기 분석

### 10. 마이그레이션 가이드

#### 기존 프로젝트에 적용
1. **jsconfig.json 생성**: 절대 경로 별칭 설정
2. **기존 임포트 수정**: 상대 경로를 절대 경로로 변경
3. **일관성 확인**: 프로젝트 전체에서 일관된 사용
4. **테스트**: 모든 임포트가 정상 작동하는지 확인

#### 단계별 마이그레이션
```javascript
// Before (상대 경로)
import { API_URL } from "../../api/apis";
import { showToast } from "../utils/toast/toast";

// After (절대 경로)
import { API_URL } from "@/api/apis";
import { showToast } from '@/utils/toast/toast';
```

## 주의사항

1. **일관성**: 프로젝트 전체에서 일관된 절대 경로 사용
2. **순환 의존성**: 절대 경로 사용 시 순환 의존성 주의
3. **IDE 지원**: IDE의 자동 완성 기능 활용
4. **성능**: 불필요한 임포트 방지
5. **리팩토링**: 파일 이동 시 경로 업데이트 확인
6. **팀 협업**: 팀 전체가 동일한 규칙 사용
7. **문서화**: 복잡한 경로 구조는 문서로 관리
8. **테스트**: 경로 변경 후 테스트 실행
9. **번들 크기**: 정기적인 번들 크기 모니터링
10. **확장성**: 새로운 디렉토리 추가 시 별칭 고려

## 적용 가이드

### 1. 새 프로젝트 설정
1. `jsconfig.json` 파일 생성
2. 필요한 절대 경로 별칭 설정
3. 프로젝트 시작부터 절대 경로 사용

### 2. 기존 프로젝트 마이그레이션
1. 기존 임포트 패턴 분석
2. `jsconfig.json` 설정 추가
3. 단계적으로 상대 경로를 절대 경로로 변경
4. 팀 전체에 규칙 공유

### 3. 유지보수
1. 새로운 디렉토리 추가 시 별칭 고려
2. 사용하지 않는 별칭 정리
3. 일관성 유지를 위한 코드 리뷰

이 절대 경로 규칙을 따라 프로젝트를 관리하면 코드의 가독성과 유지보수성이 향상됩니다.
