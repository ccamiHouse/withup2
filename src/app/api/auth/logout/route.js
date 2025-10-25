import { NextResponse } from 'next/server';

/**
 * 로그아웃 API
 * 백엔드로 로그아웃 요청을 전달하고 쿠키를 삭제합니다.
 */
export async function POST(request) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8082';
    
    // 백엔드 로그아웃 API 호출
    const response = await fetch(`${backendUrl}/api-logined/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        // 쿠키 전달을 위해 Cookie 헤더 추가
        'Cookie': request.headers.get('cookie') || '',
      },
      credentials: 'include',
    });

    const data = await response.json();

    // 응답 생성
    const responseHeaders = new Headers();
    
    // 쿠키 삭제
    responseHeaders.append(
      'Set-Cookie',
      'accessTokenLeeds=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
    );

    return NextResponse.json(
      { success: true, message: '로그아웃 성공', data },
      { headers: responseHeaders }
    );
  } catch (error) {
    console.error('로그아웃 API 오류:', error);
    
    // 에러가 발생해도 로컬 쿠키는 삭제
    const responseHeaders = new Headers();
    responseHeaders.append(
      'Set-Cookie',
      'accessTokenLeeds=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
    );

    return NextResponse.json(
      { success: false, message: '로그아웃 처리 중 오류가 발생했습니다.' },
      { status: 500, headers: responseHeaders }
    );
  }
}
