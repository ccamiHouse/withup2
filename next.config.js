/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // 서버 배포 시 필요한 파일들만 포함
  async rewrites() {
    return [
      // UI 폴더로 이동된 페이지들의 URL을 기존대로 유지
      // API 경로는 제외하고 UI 페이지만 매핑
      { 
        source: '/:path*', 
        destination: '/ui/:path*',
        has: [
          {
            type: 'header',
            key: 'accept',
            value: 'text/html.*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


