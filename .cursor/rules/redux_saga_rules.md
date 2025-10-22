# Redux Saga 비동기 처리 규칙

## 프로젝트 개요
이 프로젝트는 Redux Saga를 사용하여 비동기 작업을 처리합니다:
- **Redux Saga**: Redux의 사이드 이펙트 관리 라이브러리
- **도메인별 분리**: 각 기능별로 Saga 분리
- **비동기 처리**: API 호출, 데이터 변환 등 처리
- **에러 핸들링**: 통합된 에러 처리 방식

## Saga 디렉토리 구조

```
src/saga/
├── rootSaga.js            # 루트 Saga (모든 Saga 결합)
├── foodSaga.js            # 식품 관련 비동기 처리
├── studioSaga.js          # 스튜디오 관련 비동기 처리
├── storeSaga.js            # 스토어 관련 비동기 처리
├── authSaga.js             # 인증 관련 비동기 처리 (주석 처리됨)
├── commonSaga.js           # 공통 비동기 처리 (주석 처리됨)
└── jobSaga.js              # 작업 관련 비동기 처리 (빈 파일)
```

## Saga 규칙

### 1. 루트 Saga 설정

#### rootSaga.js 구조
```javascript
import {all} from 'redux-saga/effects'
import { watchFood } from '@/saga/foodSaga';
import { watchStudio} from '@/saga/studioSaga';
import { watchStore} from '@/saga/storeSaga';

export default function* rootSaga() {
  yield all([
    watchFood(),
    watchStore(),
    watchStudio(),
  ]);
}
```

#### 규칙
- **all 사용**: 모든 Saga를 병렬로 실행
- **watch 함수**: 각 도메인별 watch 함수 등록
- **절대 경로**: `@/` 접두사로 임포트
- **일관된 네이밍**: `watch` 접두사 사용

### 2. 도메인별 Saga 구조

#### 기본 구조
```javascript
import { call, put, takeEvery } from 'redux-saga/effects';
import logEntries from '@/utils/logEntries.js';
import { selectDomainListRequest, selectDomainListSuccess } from '@/redux/reducers/domainReducer';

function* selectDomainList({ params, payload }) {
  try {
    const { status, data } = yield call(apis.getDomainList, { params: params, payload: payload });
    if (status === 200) {
      yield put(selectDomainListSuccess(data));
    }
  } catch (error) {
    // 에러 처리
  }
}

export function* watchDomain() {
  yield takeEvery('domain/selectDomainListRequest', selectDomainList);
}
```

#### 규칙
- **Generator 함수**: `function*` 사용
- **Effect 사용**: `call`, `put`, `takeEvery` 등 사용
- **에러 처리**: try-catch 블록으로 에러 처리
- **액션 디스패치**: `put`으로 액션 디스패치

### 3. Saga Effect 사용 규칙

#### 주요 Effect들
```javascript
import { call, put, takeEvery, takeLatest, all, fork } from 'redux-saga/effects';
```

#### Effect 사용법
- **call**: 함수 호출 (API 호출 등)
- **put**: 액션 디스패치
- **takeEvery**: 모든 액션에 반응
- **takeLatest**: 최신 액션만 처리
- **all**: 여러 작업 병렬 실행
- **fork**: 비차단 작업 실행

#### 규칙
- **API 호출**: `call` 사용
- **액션 디스패치**: `put` 사용
- **액션 리스닝**: `takeEvery` 또는 `takeLatest` 사용
- **병렬 처리**: `all` 사용

### 4. API 호출 패턴

#### 표준 API 호출 패턴
```javascript
function* selectDomainList({ params, payload }) {
  try {
    const { status, data } = yield call(apis.getDomainList, { 
      params: params, 
      payload: payload 
    });
    
    if (status === 200) {
      yield put(selectDomainListSuccess(data));
    }
  } catch (error) {
    // 에러 처리 로직
  }
}
```

#### 규칙
- **call 사용**: API 호출 시 `call` Effect 사용
- **파라미터 전달**: `params`와 `payload` 분리
- **상태 코드 확인**: HTTP 상태 코드 확인
- **에러 처리**: try-catch로 에러 처리

### 5. 액션 리스닝 규칙

#### takeEvery 사용
```javascript
export function* watchDomain() {
  yield takeEvery('domain/selectDomainListRequest', selectDomainList);
}
```

#### takeLatest 사용 (권장)
```javascript
export function* watchDomain() {
  yield takeLatest('domain/selectDomainListRequest', selectDomainList);
}
```

#### 규칙
- **takeEvery**: 모든 액션에 반응 (중복 요청 가능)
- **takeLatest**: 최신 액션만 처리 (중복 요청 방지)
- **액션 타입**: `domain/actionName` 형식 사용
- **함수 전달**: 처리 함수를 직접 전달

### 6. 에러 처리 규칙

#### 기본 에러 처리
```javascript
function* selectDomainList({ params, payload }) {
  try {
    const { status, data } = yield call(apis.getDomainList, { params, payload });
    if (status === 200) {
      yield put(selectDomainListSuccess(data));
    }
  } catch (error) {
    // 에러 로깅
    console.error('API 호출 실패:', error);
    
    // 에러 액션 디스패치
    yield put(selectDomainListFailure(error.message));
  }
}
```

#### 규칙
- **try-catch**: 모든 비동기 작업에 try-catch 사용
- **에러 로깅**: 에러 발생 시 로깅
- **에러 액션**: 에러 상태를 Redux에 반영
- **사용자 알림**: 필요시 토스트 메시지 표시

### 7. 데이터 변환 규칙

#### API 응답 처리
```javascript
function* selectDomainList({ params, payload }) {
  try {
    const { status, data } = yield call(apis.getDomainList, { params, payload });
    if (status === 200) {
      // 데이터 변환 로직
      const transformedData = {
        list: data.domainList,
        totalCount: data.totalCount,
        // 기타 필요한 데이터 변환
      };
      
      yield put(selectDomainListSuccess(transformedData));
    }
  } catch (error) {
    // 에러 처리
  }
}
```

#### 규칙
- **데이터 변환**: API 응답을 컴포넌트에서 사용하기 쉬운 형태로 변환
- **일관된 구조**: 모든 응답 데이터의 구조 통일
- **필요한 데이터만**: 사용하지 않는 데이터 제거
- **타입 안정성**: 변환된 데이터의 타입 명확히 정의

### 8. 로깅 규칙

#### 로깅 사용
```javascript
import logEntries from '@/utils/logEntries.js';
import logger from '@/utils/logger/logger';

function* selectDomainList({ params, payload }) {
  try {
    logger.log("API 호출 시작:", { params, payload });
    
    const { status, data } = yield call(apis.getDomainList, { params, payload });
    
    if (status === 200) {
      logger.log("API 응답 성공:", data);
      yield put(selectDomainListSuccess(data));
    }
  } catch (error) {
    logger.error("API 호출 실패:", error);
  }
}
```

#### 규칙
- **로깅 라이브러리**: 프로젝트의 로깅 유틸리티 사용
- **요청 로깅**: API 호출 시작 시 로깅
- **응답 로깅**: 성공적인 응답 시 로깅
- **에러 로깅**: 에러 발생 시 상세 로깅

### 9. 네이밍 규칙

#### 함수 네이밍
- **워커 함수**: `selectDomainList`, `getDomainData` 등
- **워처 함수**: `watchDomain`, `watchFood` 등
- **액션 타입**: `domain/actionName` 형식

#### 규칙
- **워커 함수**: 동사로 시작 (select, get, post, put, delete)
- **워처 함수**: `watch` 접두사 사용
- **액션 타입**: `도메인/액션명` 형식
- **일관성**: 프로젝트 전체에서 일관된 네이밍

### 10. 성능 최적화 규칙

#### takeLatest 사용
```javascript
// 중복 요청 방지
export function* watchDomain() {
  yield takeLatest('domain/selectDomainListRequest', selectDomainList);
}
```

#### 병렬 처리
```javascript
// 여러 API를 병렬로 호출
function* loadInitialData() {
  yield all([
    call(loadUserData),
    call(loadSettingsData),
    call(loadConfigData)
  ]);
}
```

#### 규칙
- **takeLatest**: 중복 요청 방지
- **병렬 처리**: 독립적인 작업은 병렬로 처리
- **메모리 관리**: 불필요한 데이터 정리
- **캐싱**: 적절한 캐싱 전략 사용

## 주의사항

1. **Generator 함수**: 모든 Saga 함수는 Generator 함수여야 함
2. **Effect 사용**: Redux Saga의 Effect를 올바르게 사용
3. **에러 처리**: 모든 비동기 작업에 에러 처리 포함
4. **메모리 누수**: 무한 루프나 메모리 누수 방지
5. **테스트**: Saga 함수의 단위 테스트 작성
6. **로깅**: 적절한 로깅으로 디버깅 용이성 확보
7. **성능**: 불필요한 API 호출 방지
8. **일관성**: 프로젝트 전체에서 일관된 패턴 사용
9. **문서화**: 복잡한 로직은 주석으로 설명
10. **리팩토링**: 중복 코드 제거 및 재사용성 향상

## 마이그레이션 가이드

### 기존 비동기 처리에서 Saga로
1. 기존 비동기 로직 분석
2. Saga 함수로 변환
3. Effect 사용법 학습
4. 에러 처리 개선

### Saga 최적화
1. 불필요한 Saga 제거
2. 중복 로직 통합
3. 성능 최적화 적용
4. 테스트 코드 작성

이 Redux Saga 규칙을 따라 비동기 처리를 하면 코드의 가독성과 유지보수성이 향상됩니다.
