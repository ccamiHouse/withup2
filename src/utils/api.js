import axios from 'axios';

// axios 인스턴스 생성 함수
const createApiClient = (baseURL = null) => {
  return axios.create({
    baseURL: baseURL || 'http://localhost:8082',
    headers: {
      'Content-Type': 'application/json',
      'accept': '*/*',
    },
    withCredentials: true, // 쿠키 자동 포함
    timeout: 10000, // 10초 타임아웃
  });
};

// 기본 axios 인스턴스 (기존 코드 호환성)
const apiClient = createApiClient();

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 요청 전 처리 (토큰 추가, 로깅 등)
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    
    // 필요시 토큰 추가
    // const token = getTokenFromStorage();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    // 응답 성공 처리
    console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    // 응답 에러 처리
    console.error('[API Response Error]', error);
    
    // 에러 응답 처리
    if (error.response) {
      // 서버에서 응답을 받았지만 에러 상태 코드
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // 인증 실패 (로그인 필요)
          console.error('[401 Unauthorized] 인증이 필요합니다.');
          // 필요시 로그인 페이지로 리다이렉트
          if (typeof window !== 'undefined') {
            // window.location.href = '/login';
          }
          break;
        case 403:
          // 권한 없음
          console.error('[403 Forbidden] 권한이 없습니다.');
          break;
        case 404:
          console.error('[404 Not Found] 요청한 리소스를 찾을 수 없습니다.');
          break;
        case 500:
          console.error('[500 Internal Server Error] 서버 오류가 발생했습니다.');
          break;
        default:
          console.error(`[${status}] 에러가 발생했습니다.`, data);
      }
      
      // 에러 메시지 추출
      const errorMessage = data?.message || data?.error || error.message;
      error.message = errorMessage;
    } else if (error.request) {
      // 요청은 전송했지만 응답을 받지 못함
      console.error('[Network Error] 서버에 연결할 수 없습니다.');
      error.message = '서버에 연결할 수 없습니다. 네트워크를 확인해주세요.';
    } else {
      // 요청 설정 중 에러 발생
      console.error('[Request Error]', error.message);
    }
    
    return Promise.reject(error);
  }
);

// URL 조합 헬퍼 함수
const combineUrl = (uri, path) => {
  // uri가 있으면 uri와 path를 조합
  if (uri) {
    const cleanBase = uri.replace(/\/$/, ''); // 끝의 슬래시 제거
    const cleanPath = path.startsWith('/') ? path : `/${path}`; // 시작 슬래시 확인
    return `${cleanBase}${cleanPath}`;
  }
  // uri가 없으면 path만 반환
  return path;
};

// API 메서드들
export const api = {
  // GET 요청
  get: async (url, config = {}) => {
    try {
      const response = await apiClient.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // POST 요청
  post: async (urlOrConfig, dataOrConfig = {}, config = {}) => {
    try {
      let finalUrl = urlOrConfig;
      let finalData = dataOrConfig;
      let finalConfig = config;

      // 객체 형태로 uri와 path를 받는 경우 처리
      if (typeof urlOrConfig === 'object' && urlOrConfig.uri && urlOrConfig.path) {
        const { uri, path } = urlOrConfig;
        finalUrl = combineUrl(uri, path);
        finalData = dataOrConfig;
        finalConfig = {};
      }

      const response = await apiClient.post(finalUrl, finalData, finalConfig);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PUT 요청
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PATCH 요청
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // DELETE 요청
  delete: async (url, config = {}) => {
    try {
      const response = await apiClient.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // 원본 axios 인스턴스 (필요시 직접 사용)
  client: apiClient,
 
};

export default api;
