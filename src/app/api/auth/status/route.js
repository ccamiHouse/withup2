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
    else
    {
      return Response.json({
        success: true,
        isLoggedIn: true,
        user: null,
      });
    }

  } catch (error) {
    console.error('사용자 정보 확인 실패:', error);
    return Response.json({
      success: true,
      isLoggedIn: false,
      user: null,
    });
  }
}
