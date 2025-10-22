/**
 * 사용자 정보 확인 API
 * 로그인 상태 및 사용자 정보 반환
 */

export async function GET(request) {
  try {
    // HttpOnly 쿠키에서 accessTokenLeeds 확인
    const accessTokenLeeds = request.cookies.get('accessTokenLeeds')?.value;
    
    if (!accessTokenLeeds) {
      return Response.json({
        success: true,
        isLoggedIn: false,
        user: null,
      });
    }

    // accessTokenLeeds가 존재하면 로그인 상태로 판단
    // 추가적인 사용자 정보가 필요한 경우 세션 쿠키에서 가져오기
    const sessionCookie = request.cookies.get('session')?.value;
    let user = null;
    
    if (sessionCookie) {
      try {
        const sessionData = JSON.parse(sessionCookie);
        user = sessionData.user || null;
      } catch (error) {
        console.warn('세션 쿠키 파싱 실패:', error);
      }
    }

    return Response.json({
      success: true,
      isLoggedIn: true,
      user: user,
    });

  } catch (error) {
    console.error('사용자 정보 확인 실패:', error);
    return Response.json({
      success: true,
      isLoggedIn: false,
      user: null,
    });
  }
}
