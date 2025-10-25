/**
 * 카카오 로그인 콜백 처리 API
 * Next.js API Routes 사용
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, error } = req.query;

  // 에러 처리
  if (error) {
    console.error('카카오 로그인 에러:', error);
    return res.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}/login?error=${error}`);
  }

  // 인증 코드가 없는 경우
  if (!code) {
    return res.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}/login?error=no_code`);
  }

  try {
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
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
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

    // 4. 세션에 사용자 정보 저장 (간단한 구현)
    // 실제로는 JWT 토큰이나 데이터베이스에 저장해야 함
    const sessionData = {
      user: user,
      loginTime: new Date().toISOString(),
    };

    // 5. 쿠키에 세션 정보 저장
    res.setHeader('Set-Cookie', [
      `session=${JSON.stringify(sessionData)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`, // 7일
    ]);

    // 6. 프론트엔드로 리다이렉트
    res.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}?login=success`);

  } catch (error) {
    console.error('카카오 로그인 처리 실패:', error);
    res.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}/login?error=login_failed`);
  }
}
