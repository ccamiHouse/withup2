/**
 * 사용자 정보 확인 API
 * 로그인 상태 및 사용자 정보 반환
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 쿠키에서 세션 정보 읽기
    const sessionCookie = req.cookies.session;
    
    if (!sessionCookie) {
      return res.status(200).json({
        success: true,
        isLoggedIn: false,
        user: null,
      });
    }

    // 세션 데이터 파싱
    const sessionData = JSON.parse(sessionCookie);
    const { user, loginTime } = sessionData;

    // 세션 유효성 검사 (7일)
    const loginDate = new Date(loginTime);
    const now = new Date();
    const daysDiff = (now - loginDate) / (1000 * 60 * 60 * 24);

    if (daysDiff > 7) {
      // 세션 만료
      res.setHeader('Set-Cookie', 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
      return res.status(200).json({
        success: true,
        isLoggedIn: false,
        user: null,
      });
    }

    // 로그인 상태 반환
    return res.status(200).json({
      success: true,
      isLoggedIn: true,
      user: user,
    });

  } catch (error) {
    console.error('사용자 정보 확인 실패:', error);
    return res.status(200).json({
      success: true,
      isLoggedIn: false,
      user: null,
    });
  }
}
