# Next.js 프로젝트 폴더 구조 규칙

## 프로젝트 개요
이 프로젝트는 다음과 같은 구조의 Next.js 프로젝트입니다:
- 프론트엔드: Next.js와 React
- 상태 관리: Redux Toolkit
- 스타일링: Tailwind CSS
- API: Axios를 사용한 HTTP 요청
- 이미지 업로드: 커스텀 ImageUploader 컴포넌트

## 루트 디렉토리 구조

```
{project_name}/
├── src/                    # 소스 코드 디렉토리
├── public/                 # 정적 파일 디렉토리
├── docs/                   # 문서 디렉토리
├── .github/               # GitHub 설정 디렉토리
├── .idea/                 # IDE 설정 디렉토리
├── .cursor/               # Cursor IDE 설정 디렉토리
├── package.json           # 프로젝트 의존성 및 스크립트
├── next.config.mjs        # Next.js 설정 파일
├── tailwind.config.mjs     # Tailwind CSS 설정 파일
├── eslint.config.mjs      # ESLint 설정 파일
├── jsconfig.json          # JavaScript 설정 파일
├── postcss.config.mjs     # PostCSS 설정 파일
├── DockerFile             # Docker 설정 파일
├── .dockerignore          # Docker 무시 파일 목록
├── .gitignore             # Git 무시 파일 목록
├── README.md              # 프로젝트 설명서
└── command                # 실행 명령어 파일
```

## src 디렉토리 구조

### 1. app 디렉토리 (Next.js App Router)
```
src/app/
├── api/                   # API 라우트
│   ├── address/          # 주소 관련 API
│   ├── auth/             # 인증 관련 API
│   └── ...
├── ui/                   # 페이지 컴포넌트
│   ├── food/             # 식품 관련 페이지
│   ├── store/            # 스토어 관련 페이지
│   ├── studio/           # 스튜디오 관련 페이지
│   ├── login/            # 로그인 페이지
│   ├── join/             # 회원가입 페이지
│   └── test/             # 테스트 페이지
├── globals.css           # 전역 스타일
├── layout.js             # 루트 레이아웃
├── page.js               # 홈페이지
└── providers.js          # 프로바이더 설정
```

### 2. components 디렉토리 (컴포넌트 라이브러리)
```
src/components/
├── atoms/                # 원자 단위 컴포넌트
│   ├── button/           # 버튼 컴포넌트
│   ├── container/        # 컨테이너 컴포넌트
│   ├── icon/             # 아이콘 컴포넌트
│   ├── input/            # 입력 컴포넌트
│   ├── lable/            # 라벨 컴포넌트
│   ├── text/             # 텍스트 컴포넌트
│   ├── CircleProgress.js
│   ├── ProgressBar.js
│   ├── SkeletonLodingComponent.js
│   └── SwitchToggle.js
├── modules/              # 모듈 컴포넌트
│   ├── card/             # 카드 컴포넌트
│   ├── Inputfoems/       # 입력 폼 컴포넌트
│   ├── navigation/       # 네비게이션 컴포넌트
│   ├── DatePickerSingle.js
│   ├── DateRangePicker.js
│   ├── DropdownSearch.js
│   ├── DropdownSearchStudio.js
│   ├── FoodCategoryFilter.js
│   ├── FoodItemComponent.js
│   ├── ImageRadioGroup.js
│   ├── ImageUploader.js
│   ├── LoginModal.js
│   ├── PhoneReserveModal.js
│   ├── StudioCategoryFilter.js
│   └── TimeRangePicker.js
├── templates/            # 템플릿 컴포넌트
│   ├── Footer.js
│   ├── HeaderUtilityBar.js
│   ├── HomeFooterPage.js
│   ├── HomeHeaderPage.js
│   ├── page.js
│   └── SubHeader.js
└── uncategorized/        # 분류되지 않은 컴포넌트
    ├── address/          # 주소 관련 컴포넌트
    ├── auth/             # 인증 관련 컴포넌트
    ├── icons/            # 아이콘 컴포넌트
    ├── loading/          # 로딩 컴포넌트
    ├── modal/            # 모달 컴포넌트
    ├── returnRequest/    # 반품 요청 컴포넌트
    ├── review/           # 리뷰 컴포넌트
    └── trash/            # 사용하지 않는 컴포넌트
```

### 3. redux 디렉토리 (상태 관리)
```
src/redux/
├── reducers/              # 리듀서
│   ├── authReducer.js     # 인증 리듀서
│   ├── businessPageReducer.js
│   ├── commonReducer.js   # 공통 리듀서
│   ├── foodMyPageReducer.js
│   ├── foodReducer.js     # 식품 리듀서
│   ├── foodSortByReducer.js
│   ├── pageDepthReducer.js
│   ├── rootReducer.js     # 루트 리듀서
│   ├── storeReducer.js    # 스토어 리듀서
│   ├── studioReducer.js   # 스튜디오 리듀서
│   ├── studioSortByReducer.js
│   └── trash/             # 사용하지 않는 리듀서
└── store.js               # 스토어 설정
```


### 4. enums 디렉토리 (열거형 상수)
```
src/enums/
├── apis/
│   └── methods.js         # API 메서드 상수
├── BusinessInfoTab.js     # 비즈니스 정보 탭
├── BusinessMenuCode.js    # 비즈니스 메뉴 코드
├── BusinessStatus.js      # 비즈니스 상태
├── domains.js             # 도메인 상수
├── FoodListTabPage.js     # 식품 목록 탭 페이지
├── foodSortBy.js          # 식품 정렬 기준
├── foodStorage.js         # 식품 저장소
├── FoodTypeCode.js        # 식품 타입 코드
├── myFavorite.js          # 내 즐겨찾기
├── MyPageMenuCode.js      # 마이페이지 메뉴 코드
├── MyPageStudioMenuCode.js # 마이페이지 스튜디오 메뉴 코드
├── myReservationStatus.js # 내 예약 상태
├── myReview.js            # 내 리뷰
├── OrderManage.js         # 주문 관리
├── PageCode.js            # 페이지 코드
├── PageCode2.js           # 페이지 코드 2
├── ReservationManage.js   # 예약 관리
├── ReturnManage.js        # 반품 관리
├── ServiceListTabPage.js  # 서비스 목록 탭 페이지
├── SpecialNutrientCode.js # 특수 영양소 코드
├── StoreListTabPage.js    # 스토어 목록 탭 페이지
├── StudioListTabPage.js   # 스튜디오 목록 탭 페이지
├── studioSortBy.js        # 스튜디오 정렬 기준
├── StudioTypeCode.js      # 스튜디오 타입 코드
└── subscriptionManage.js  # 구독 관리
```

### 5. 기타 디렉토리
```
src/
├── api/
│   └── apis.js            # API 엔드포인트 정의
├── hooks/
│   └── useModal.js        # 모달 커스텀 훅
├── middleware.js           # Next.js 미들웨어
└── utils/                 # 유틸리티 함수
    ├── axios/
    │   └── axios.js       # Axios 설정
    ├── cookie/
    │   └── cookie.js      # 쿠키 유틸리티
    ├── isEmpty.js         # 빈 값 체크
    ├── logEntries.js      # 로그 엔트리
    ├── logger/
    │   └── logger.js      # 로거 설정
    ├── login/
    │   └── login.js       # 로그인 유틸리티
    ├── PrettyJSON.js      # JSON 포맷팅
    └── toast/
        └── toast.js       # 토스트 메시지
```

## public 디렉토리 구조

```
public/
├── file/                  # 문서 파일
│   ├── 건강기능식품_상세페이지_표기사항.docx
│   └── 일반식품_상세페이지_표기사항.docx
├── icons/                 # 아이콘 파일 (161개 SVG)
└── images/                # 이미지 파일 (200개)
    ├── PNG 파일 (173개)
    ├── JPG 파일 (18개)
    └── SVG 파일 (8개)
```

## 프로젝트 설정

### 프로젝트 이름 변경
- `{project_name}`을 실제 프로젝트 이름으로 교체하세요
- 예: `my_nextjs_project`, `ecommerce_app`, `blog_platform` 등

### 도메인 설정
프로젝트에 맞게 도메인을 수정하세요:
- **food**: 식품 관련 기능 → **product**: 상품 관련 기능
- **store**: 스토어 관련 기능 → **shop**: 쇼핑 관련 기능  
- **studio**: 스튜디오 관련 기능 → **service**: 서비스 관련 기능
- **auth**: 인증 관련 기능 (공통)

## 폴더 구조 규칙

### 1. 네이밍 규칙
- **파일명**: camelCase 사용 (예: `foodReducer.js`, `ImageUploader.js`)
- **디렉토리명**: 소문자 사용 (예: `components`, `redux`, `saga`)
- **컴포넌트명**: PascalCase 사용 (예: `FoodCard`, `LoginModal`)

### 2. 디렉토리 분류 규칙
- **atoms**: 가장 작은 단위의 재사용 가능한 컴포넌트
- **modules**: 여러 atoms를 조합한 복합 컴포넌트
- **templates**: 페이지 레이아웃을 담당하는 컴포넌트
- **uncategorized**: 아직 분류되지 않은 컴포넌트

### 3. 파일 구조 규칙
- **페이지 파일**: `page.js`로 통일
- **레이아웃 파일**: `layout.js`로 통일
- **리듀서 파일**: `*Reducer.js`로 통일
- **사가 파일**: `*Saga.js`로 통일

### 4. 임포트 규칙
- **절대 경로 사용**: `@/` 접두사 사용
- **상대 경로 지양**: 가능한 한 절대 경로 사용
- **명확한 경로**: 파일 확장자 포함

### 5. 컴포넌트 분류 규칙
- **atoms**: 가장 작은 단위의 재사용 가능한 컴포넌트
- **modules**: 여러 atoms를 조합한 복합 컴포넌트
- **templates**: 페이지 레이아웃을 담당하는 컴포넌트
- **uncategorized**: 아직 분류되지 않은 컴포넌트

### 6. 도메인별 분리 규칙
프로젝트에 맞게 도메인을 수정하세요:
- **product**: 상품 관련 모든 기능 (기존: food)
- **shop**: 쇼핑 관련 모든 기능 (기존: store)
- **service**: 서비스 관련 모든 기능 (기존: studio)
- **auth**: 인증 관련 모든 기능 (공통)

### 6. 상태 관리 규칙
- **Redux Toolkit**: 전역 상태 관리
- **React Query**: 서버 상태 관리 (일부 사용)

### 7. 스타일링 규칙
- **Tailwind CSS**: 유틸리티 클래스 사용
- **CSS 모듈**: 컴포넌트별 스타일 격리
- **글로벌 스타일**: `globals.css`에서 관리

### 8. API 규칙
- **RESTful API**: 표준 REST 규칙 준수
- **Axios**: HTTP 클라이언트로 사용
- **환경변수**: API 서버 URL 환경변수로 관리

### 9. 테스트 규칙
- **test 디렉토리**: 개발/테스트용 페이지
- **숫자 네이밍**: 테스트 페이지는 숫자로 구분
- **별도 분리**: 프로덕션 코드와 분리

## 주의사항

1. **컴포넌트 재사용성**: 가능한 한 재사용 가능한 컴포넌트로 설계
2. **도메인 분리**: 각 도메인별로 명확히 분리하여 관리
3. **컴포넌트 분류**: atoms, modules, templates로 명확히 구분
4. **파일 크기**: 단일 파일은 500줄 이하로 유지
5. **의존성 관리**: 순환 의존성 방지
6. **타입 안정성**: 가능한 한 타입 체크 강화
7. **성능 최적화**: 불필요한 리렌더링 방지
8. **접근성**: 웹 접근성 가이드라인 준수
9. **보안**: 민감한 정보 환경변수로 관리
10. **문서화**: 복잡한 로직은 주석으로 설명

## 마이그레이션 가이드

### 컴포넌트 구조 정리
1. 기존 컴포넌트 분석
2. atoms, modules, templates로 재분류
3. 새로운 props 인터페이스 정의
4. 기존 사용처 업데이트
5. 불필요한 컴포넌트 제거

### trash 디렉토리 정리
1. 사용하지 않는 컴포넌트 식별
2. 의존성 확인
3. 안전한 제거 계획 수립
4. 단계적 제거 실행

## 적용 가이드

### 1. 프로젝트 초기 설정
1. `{project_name}`을 실제 프로젝트 이름으로 교체
2. 도메인별 폴더명을 프로젝트에 맞게 수정
3. 필요한 컴포넌트만 유지하고 불필요한 것 제거

### 2. 컴포넌트 마이그레이션
1. 기존 컴포넌트를 atoms, modules, templates로 재분류
2. 도메인별로 폴더 구조 정리
3. 임포트 경로를 절대 경로로 변경

### 3. 상태 관리 설정
1. Redux store 설정
2. 필요한 리듀서 생성
3. 도메인별로 상태 관리 분리

이 폴더 구조 규칙을 따라 프로젝트를 관리하면 코드의 가독성과 유지보수성이 향상됩니다.
