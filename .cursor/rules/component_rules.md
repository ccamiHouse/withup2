# React 컴포넌트 개발 규칙

## 프로젝트 개요
이 프로젝트는 다음과 같은 React 컴포넌트 구조를 사용합니다:
- **Atomic Design**: atoms, modules, templates, uncategorized 구조
- **Next.js**: App Router 기반 페이지 컴포넌트
- **Tailwind CSS**: 유틸리티 클래스 기반 스타일링
- **TypeScript**: 타입 안정성을 위한 인터페이스 정의
- **재사용성**: 높은 재사용성을 위한 컴포넌트 설계

## 컴포넌트 디렉토리 구조

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

## 컴포넌트 규칙

### 1. Atomic Design 원칙

#### Atoms (원자)
- **가장 작은 단위**: 더 이상 분해할 수 없는 기본 컴포넌트
- **재사용성**: 프로젝트 전체에서 재사용 가능
- **독립성**: 다른 컴포넌트에 의존하지 않음
- **예시**: Button, Input, Text, Icon 등

#### Modules (모듈)
- **복합 컴포넌트**: 여러 atoms를 조합한 컴포넌트
- **기능 단위**: 특정 기능을 수행하는 컴포넌트
- **비즈니스 로직**: 도메인별 비즈니스 로직 포함
- **예시**: FoodCard, ImageUploader, LoginModal 등

#### Templates (템플릿)
- **레이아웃 컴포넌트**: 페이지의 전체 구조를 담당
- **레이아웃 로직**: 컴포넌트 배치와 구조 정의
- **재사용성**: 여러 페이지에서 공통으로 사용
- **예시**: Footer, Header, Layout 등

#### Uncategorized (미분류)
- **임시 분류**: 아직 적절한 카테고리가 없는 컴포넌트
- **도메인별**: 특정 도메인에 특화된 컴포넌트
- **정리 필요**: 시간이 지나면 적절한 카테고리로 이동

### 2. 컴포넌트 작성 규칙

#### 기본 구조
```javascript
"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const ComponentName = ({ prop1, prop2, className }) => {
  // 상태 관리
  const [state, setState] = useState();
  
  // 훅 사용
  const router = useRouter();
  const dispatch = useDispatch();
  
  // 이벤트 핸들러
  const handleClick = () => {
    // 로직 처리
  };
  
  // useEffect는 컴포넌트의 return문 바로 위에 작성
  useEffect(() => {
    // 사이드 이펙트 처리
  }, []);
  
  return (
    <div className={`${className}`}>
      {/* 컴포넌트 내용 */}
    </div>
  );
};

export default ComponentName;
```

#### 규칙
- **"use client"**: 클라이언트 컴포넌트 명시
- **명확한 네이밍**: 컴포넌트 이름은 PascalCase
- **Props 구조분해**: 필요한 props만 구조분해 할당
- **상태 관리**: useState로 로컬 상태 관리
- **useEffect 위치**: return문 바로 위에 배치

### 3. Props 설계 규칙

#### Props 네이밍 규칙
```javascript
// 필수 props
const ComponentName = ({ 
  label,           // 라벨 텍스트
  maxImages,       // 최대 이미지 개수
  imageType,       // 이미지 타입
  imageCategory,   // 이미지 카테고리
  uploadUrl,       // 업로드 URL
  // 선택적 props
  onImagesChange,  // 이미지 변경 콜백
  onDeleteChange,  // 이미지 삭제 콜백
  initialImages,   // 초기 이미지들
  className        // 추가 CSS 클래스
}) => {
  // 컴포넌트 로직
};
```

#### 규칙
- **명확한 이름**: props 이름은 용도를 명확히 표현
- **필수/선택 구분**: 필수 props와 선택적 props 구분
- **타입 명시**: 가능한 한 타입 명시
- **기본값 설정**: 선택적 props는 기본값 설정

### 4. 상태 관리 규칙

#### 로컬 상태 관리
```javascript
const ComponentName = () => {
  // 기본 상태
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // 복잡한 상태
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  // 상태 업데이트
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
};
```

#### 규칙
- **useState 사용**: 로컬 상태는 useState로 관리
- **초기값 설정**: 모든 상태의 초기값 명시
- **불변성 유지**: 상태 업데이트 시 불변성 유지
- **상태 분리**: 관련 없는 상태는 분리하여 관리

### 5. 이벤트 핸들링 규칙

#### 이벤트 핸들러 작성
```javascript
const ComponentName = () => {
  // 기본 이벤트 핸들러
  const handleClick = () => {
    // 클릭 로직
  };
  
  // 파라미터가 있는 핸들러
  const handleItemClick = (itemId) => {
    // 아이템 클릭 로직
  };
  
  // 비동기 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await submitData();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleItemClick(item.id)}>아이템</button>
      <form onSubmit={handleSubmit}>폼</form>
    </div>
  );
};
```

#### 규칙
- **handle 접두사**: 이벤트 핸들러는 handle 접두사 사용
- **명확한 이름**: 핸들러 이름은 동작을 명확히 표현
- **에러 처리**: 비동기 작업에 에러 처리 포함
- **이벤트 객체**: 필요시 event 객체 사용

### 6. 스타일링 규칙

#### Tailwind CSS 사용
```javascript
const ComponentName = ({ className }) => {
  return (
    <div className={`
      // 기본 스타일
      w-full h-full
      // 반응형 스타일
      md:w-1/2 lg:w-1/3
      // 상태별 스타일
      hover:bg-gray-100 active:bg-gray-200
      // 조건부 스타일
      ${isActive ? 'bg-blue-500' : 'bg-gray-500'}
      // 추가 클래스
      ${className}
    `}>
      {/* 내용 */}
    </div>
  );
};
```

#### 규칙
- **Tailwind 우선**: 가능한 한 Tailwind CSS 사용
- **조건부 스타일**: 상태에 따른 조건부 스타일링
- **반응형**: 모바일 우선 반응형 디자인
- **일관성**: 프로젝트 전체에서 일관된 스타일

### 7. 모달 컴포넌트 규칙

#### 모달 구조
```javascript
const ComponentName = () => {
  // 모달 관리
  const {
    isOpen: isModalOpen,
    showModal: showModal,
    closeModal: closeModal
  } = useModal();
  
  return (
    <>
      {/* 메인 컴포넌트 */}
      <div>
        <button onClick={showModal}>모달 열기</button>
      </div>
      
      {/* 모달 컴포넌트들 - 코드 최하단에 배치 */}
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        {/* 모달 내용 */}
      </CustomModal>
    </>
  );
};
```

#### 규칙
- **useModal 훅**: 모달 관리는 useModal 훅 사용
- **모달 위치**: 모달 컴포넌트는 코드 최하단에 배치
- **CustomModal**: 공통 모달 컴포넌트 사용
- **이벤트 처리**: 모달 열기/닫기 이벤트 처리

### 8. API 통신 규칙

#### API 호출 패턴
```javascript
const ComponentName = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/api/endpoint`,
        requestData,
        { withCredentials: true }
      );
      
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setError(error.message);
      console.error('API 호출 실패:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
};
```

#### 규칙
- **withCredentials**: 쿠키 전달을 위해 withCredentials: true
- **환경변수**: API 서버 URL은 환경변수 사용
- **에러 처리**: try-catch로 에러 처리
- **로딩 상태**: 로딩 상태 관리

### 9. 이미지 처리 규칙

#### Next.js Image 컴포넌트 사용
```javascript
import Image from 'next/image';

const ComponentName = ({ imageSrc, alt, width, height }) => {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className="object-cover rounded-lg"
      draggable="false"
      priority={false}
    />
  );
};
```

#### 규칙
- **Next.js Image**: Next.js의 Image 컴포넌트 사용
- **alt 속성**: 접근성을 위해 alt 속성 필수
- **draggable="false"**: 불필요한 드래그 방지
- **priority**: 중요한 이미지는 priority 설정

### 10. 성능 최적화 규칙

#### 메모이제이션
```javascript
import { useMemo, useCallback } from 'react';

const ComponentName = ({ items, filter }) => {
  // 계산된 값 메모이제이션
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);
  
  // 함수 메모이제이션
  const handleItemClick = useCallback((itemId) => {
    // 아이템 클릭 로직
  }, []);
  
  return (
    <div>
      {filteredItems.map(item => (
        <ItemComponent 
          key={item.id} 
          item={item} 
          onClick={handleItemClick} 
        />
      ))}
    </div>
  );
};
```

#### 규칙
- **useMemo**: 복잡한 계산 결과 메모이제이션
- **useCallback**: 함수 메모이제이션
- **key 속성**: 리스트 렌더링 시 key 속성 필수
- **불필요한 리렌더링**: 불필요한 리렌더링 방지

## 주의사항

1. **컴포넌트 크기**: 단일 컴포넌트는 500줄 이하로 유지
2. **재사용성**: 가능한 한 재사용 가능한 컴포넌트로 설계
3. **성능**: 불필요한 리렌더링 방지
4. **접근성**: 웹 접근성 가이드라인 준수
5. **타입 안정성**: 가능한 한 타입 체크 강화
6. **에러 처리**: 모든 비동기 작업에 에러 처리 포함
7. **문서화**: 복잡한 로직은 주석으로 설명
8. **테스트**: 중요한 컴포넌트는 테스트 코드 작성
9. **일관성**: 프로젝트 전체에서 일관된 패턴 사용
10. **리팩토링**: 중복 코드 제거 및 재사용성 향상

## 마이그레이션 가이드

### 기존 컴포넌트 개선
1. 기존 컴포넌트 분석
2. Atomic Design 원칙에 맞게 재분류
3. Props 인터페이스 개선
4. 성능 최적화 적용

### 컴포넌트 구조 정리
1. 사용하지 않는 컴포넌트 제거
2. 중복 컴포넌트 통합
3. 적절한 카테고리로 이동
4. 문서화 개선

이 React 컴포넌트 규칙을 따라 개발하면 코드의 가독성과 유지보수성이 향상됩니다.
