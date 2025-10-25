/**
 * 카카오 로그인 콜백 처리
 */

export async function POST(request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return Response.json(
        { success: false, error: '인증 코드가 없습니다.' },
        { status: 400 }
      );
    }

    // 백엔드 API로 카카오 인증 코드 전송
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8082';
    
    const response = await fetch(`${backendUrl}/api-guest/auth/login-signin/kakao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('백엔드 인증 실패');
    }

    const data = await response.json();

    // 응답 쿠키 설정 (백엔드에서 설정한 쿠키 전달)
    const headers = new Headers();
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        headers.append(key, value);
      }
    });

    return Response.json(data, { headers });

  } catch (error) {
    console.error('카카오 로그인 실패:', error);
    return Response.json(
      { success: false, error: error.message || '카카오 로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
