import { NextResponse } from 'next/server';

/**
 * 카카오 로그인 콜백 처리 API
 * Next.js App Router 사용
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // 에러 처리
  if (error) {
    console.error('카카오 로그인 에러:', error);
    const frontUrl = process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${frontUrl}/login?error=${error}`);
  }

  // 인증 코드가 없는 경우
  if (!code) {
    const frontUrl = process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${frontUrl}/login?error=no_code`);
  }

  try {
    const redirectUri = `${process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000'}/login`;
    
    // 1. 카카오 액세스 토큰 발급
    const tokenResponse = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
        client_secret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || '',
        redirect_uri: redirectUri,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('카카오 토큰 발급 실패');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. 카카오 사용자 정보 조회
    const userResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!userResponse.ok) {
      throw new Error('카카오 사용자 정보 조회 실패');
    }

    const userData = await userResponse.json();
    
    // 3. 사용자 정보 파싱
    const user = {
      id: userData.id,
      email: userData.kakao_account?.email || '',
      nickname: userData.kakao_account?.profile?.nickname || '',
      profileImage: userData.kakao_account?.profile?.profile_image_url || '',
      provider: 'kakao',
    };

    // 4. 세션에 사용자 정보 저장
    const sessionData = {
      user: user,
      loginTime: new Date().toISOString(),
    };

    // 5. 쿠키에 세션 정보 저장
    const frontUrl = process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000';
    const response = NextResponse.redirect(`${frontUrl}?login=success`);

    response.cookies.set('session', JSON.stringify(sessionData), {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7일
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('카카오 로그인 처리 실패:', error);
    const frontUrl = process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${frontUrl}/login?error=login_failed`);
  }
}
