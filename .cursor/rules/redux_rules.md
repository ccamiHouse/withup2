# Redux 상태 관리 규칙

## 프로젝트 개요
이 프로젝트는 다음과 같은 Redux 상태 관리 구조를 사용합니다:
- **Redux Toolkit**: 현대적인 Redux 사용법
- **Redux Saga**: 비동기 작업 처리
- **도메인별 분리**: 각 기능별로 리듀서 분리
- **타입 안정성**: 액션과 상태의 타입 관리

## Redux 디렉토리 구조

```
src/redux/
├── store.js               # Redux 스토어 설정
└── reducers/              # 리듀서 모음
    ├── rootReducer.js     # 루트 리듀서 (모든 리듀서 결합)
    ├── authReducer.js     # 인증 관련 상태
    ├── commonReducer.js   # 공통 상태 (도메인, 페이지 등)
    ├── foodReducer.js     # 식품 관련 상태
    ├── studioReducer.js   # 스튜디오 관련 상태
    ├── storeReducer.js    # 스토어 관련 상태
    ├── foodMyPageReducer.js # 식품 마이페이지 상태
    ├── businessPageReducer.js # 비즈니스 페이지 상태
    ├── foodSortByReducer.js # 식품 정렬 상태
    ├── studioSortByReducer.js # 스튜디오 정렬 상태
    └── pageDepthReducer.js # 페이지 깊이 상태
```

## Redux 규칙

### 1. 스토어 설정 규칙

#### store.js 구조
```javascript
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from '@/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
```

#### 규칙
- **Redux Toolkit 사용**: `configureStore` 사용
- **Saga 미들웨어**: Redux Saga를 위한 미들웨어 설정
- **Thunk 비활성화**: Saga 사용 시 thunk 비활성화
- **DevTools**: 개발 환경에서만 활성화

### 2. 루트 리듀서 규칙

#### rootReducer.js 구조
```javascript
import { combineReducers } from "@reduxjs/toolkit";

// 각 도메인별 리듀서 import
import AuthReducer from "@/redux/reducers/authReducer";
import CommonReducer from "@/redux/reducers/commonReducer";
import FoodReducer from "@/redux/reducers/foodReducer";
// ... 기타 리듀서들

const rootReducer = combineReducers({
  common: CommonReducer,
  auth: AuthReducer,
  food: FoodReducer,
  studio: StudioReducer,
  store: StoreReducer,
  // ... 기타 상태들
});

export default rootReducer;
```

#### 규칙
- **combineReducers 사용**: 모든 리듀서를 하나로 결합
- **도메인별 네이밍**: 상태 이름은 도메인과 일치
- **절대 경로**: `@/` 접두사 사용
- **명확한 주석**: 각 리듀서의 역할 명시

### 3. 리듀서 작성 규칙

#### 기본 구조
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 초기 상태 정의
};

const domainReducer = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    // 액션과 리듀서 정의
  },
});

export const { action1, action2 } = domainReducer.actions;
export default domainReducer.reducer;
```

#### 규칙
- **createSlice 사용**: Redux Toolkit의 createSlice 사용
- **명확한 네이밍**: 리듀서 이름은 도메인과 일치
- **초기 상태 정의**: 모든 상태의 초기값 명시
- **액션 내보내기**: 필요한 액션만 내보내기

### 4. 상태 설계 규칙

#### 도메인별 상태 분리
- **auth**: 인증 관련 상태 (isLogin 등)
- **common**: 공통 상태 (activeDomain, activePage 등)
- **food**: 식품 관련 상태 (foodList, SearchKeyword 등)
- **studio**: 스튜디오 관련 상태 (studioList, SearchKeyword 등)
- **store**: 스토어 관련 상태

#### 상태 네이밍 규칙
- **불린 값**: `is` 접두사 (isLogin, isLogined)
- **목록**: `List` 접미사 (foodList, studioList)
- **검색**: `Search` 접두사 (SearchKeyword, SearchFilterList)
- **범위**: `Range` 접미사 (startRangePrice, endRangePrice)

### 5. 액션 작성 규칙

#### 액션 네이밍 규칙
- **설정**: `set` 접두사 (setSearchKeyword, setActiveDomain)
- **선택**: `choice` 접두사 (choiceFoodType, choiceStudioType)
- **요청**: `Request` 접미사 (selectFoodListRequest)
- **성공**: `Success` 접미사 (selectFoodListSuccess)

#### 액션 구조 예시
```javascript
// 단순 설정 액션
setSearchKeyword(state, action) {
  state.SearchKeyword = action.payload;
},

// 복잡한 로직 액션
choiceFoodType(state, action) {
  const foodType = action.payload;
  let foodTypeListLocal = JSON.parse(JSON.stringify(state.SearchFoodTypeList));
  // 복잡한 로직 처리
  state.SearchFoodTypeList = foodTypeListLocal;
},
```

### 6. 상태 업데이트 규칙

#### Immer 사용
- **직접 수정**: Redux Toolkit의 Immer를 통해 직접 상태 수정 가능
- **불변성**: 자동으로 불변성 유지
- **깊은 복사**: 필요시 `JSON.parse(JSON.stringify())` 사용

#### 상태 업데이트 패턴
```javascript
// 단순 값 설정
state.value = action.payload;

// 배열 추가
state.list.push(action.payload);

// 배열 필터링
state.list = state.list.filter(item => item !== action.payload);

// 객체 업데이트
state.object = { ...state.object, ...action.payload };
```

### 7. 에러 처리 규칙

#### 에러 상태 관리
```javascript
const initialState = {
  loading: false,
  error: null,
  data: []
};

reducers: {
  requestAction(state) {
    state.loading = true;
    state.error = null;
  },
  successAction(state, action) {
    state.loading = false;
    state.data = action.payload;
  },
  failureAction(state, action) {
    state.loading = false;
    state.error = action.payload;
  }
}
```

#### 규칙
- **로딩 상태**: 비동기 작업 시 loading 상태 관리
- **에러 상태**: 에러 발생 시 error 상태에 저장
- **요청 시작**: loading을 true로, error를 null로 초기화
- **요청 완료**: loading을 false로 설정

### 8. 도메인별 리듀서 규칙

#### 공통 패턴
- **검색 키워드**: `SearchKeyword` 상태
- **필터 목록**: `SearchFilterList` 또는 도메인별 필터
- **정렬**: `searchSort` 또는 도메인별 정렬 상태
- **로딩/에러**: `loading`, `error` 상태

#### 도메인별 특화 상태
- **food**: 영양소 범위 (startRangeCarbohydrate, endRangeCarbohydrate 등)
- **studio**: 예약 유형 (ReservationTypeCodeList)
- **auth**: 로그인 상태 (isLogin)

### 9. 임포트 규칙

#### 절대 경로 사용
```javascript
import { createSlice } from '@reduxjs/toolkit';
import { DomainEnumCode } from '@/enums/domains';
import { PageCode } from '@/enums/PageCode';
import { isEmpty } from '@/utils/isEmpty';
import logger from '@/utils/logger/logger';
```

#### 규칙
- **Redux Toolkit**: `@reduxjs/toolkit`에서 import
- **프로젝트 모듈**: `@/` 접두사로 절대 경로 사용
- **유틸리티**: 필요한 유틸리티 함수들 import
- **열거형**: 상수는 enums에서 import

### 10. 성능 최적화 규칙

#### 상태 구조 최적화
- **정규화**: 중첩된 객체보다 평면적인 구조 선호
- **ID 기반**: 배열에서 객체를 찾을 때 ID 사용
- **불필요한 상태**: 사용하지 않는 상태 제거

#### 리렌더링 최적화
- **선택적 구독**: useSelector로 필요한 상태만 구독
- **메모이제이션**: 복잡한 계산은 useMemo 사용
- **액션 최적화**: 불필요한 액션 디스패치 방지

## 주의사항

1. **상태 정규화**: 중첩된 상태보다 평면적인 구조 사용
2. **액션 네이밍**: 일관된 네이밍 규칙 준수
3. **에러 처리**: 모든 비동기 작업에 에러 처리 포함
4. **타입 안정성**: 가능한 한 타입 체크 강화
5. **성능 고려**: 불필요한 리렌더링 방지
6. **도메인 분리**: 각 도메인별로 명확히 분리
7. **초기 상태**: 모든 상태의 초기값 명시
8. **액션 크기**: 액션 페이로드는 최소한으로 유지
9. **상태 크기**: 단일 리듀서는 500줄 이하로 유지
10. **문서화**: 복잡한 로직은 주석으로 설명

## 마이그레이션 가이드

### 기존 Redux에서 Redux Toolkit으로
1. 기존 액션과 리듀서 분석
2. createSlice로 리팩토링
3. 액션 생성자 자동화 활용
4. 불변성 로직 제거 (Immer 활용)

### 상태 구조 개선
1. 중첩된 상태를 평면적으로 변경
2. 불필요한 상태 제거
3. 도메인별로 명확히 분리
4. 네이밍 규칙 통일

이 Redux 규칙을 따라 상태 관리를 하면 코드의 가독성과 유지보수성이 향상됩니다.
