/**
 * 로그아웃 API
 * 세션 쿠키 삭제
 */

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // 세션 쿠키 삭제 (httponly)
    cookieStore.set('session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/'
    });

    // 추가적인 인증 관련 쿠키들도 삭제
    cookieStore.set('accessToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/'
    });

    cookieStore.set('refreshToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/'
    });

    return NextResponse.json({
      success: true,
      message: '로그아웃 성공',
    }, { status: 200 });

  } catch (error) {
    console.error('로그아웃 실패:', error);
    return NextResponse.json({
      success: false,
      message: '로그아웃 실패',
    }, { status: 500 });
  }
}
