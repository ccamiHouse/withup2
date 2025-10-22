/**
 * 로그아웃 API
 * 세션 쿠키 삭제
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 세션 쿠키 삭제
    res.setHeader('Set-Cookie', 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');

    return res.status(200).json({
      success: true,
      message: '로그아웃 성공',
    });

  } catch (error) {
    console.error('로그아웃 실패:', error);
    return res.status(500).json({
      success: false,
      message: '로그아웃 실패',
    });
  }
}
