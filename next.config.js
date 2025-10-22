/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // 서버 배포 시 필요한 파일들만 포함
  async rewrites() {
    return [
      // UI 폴더로 이동된 페이지들의 URL을 기존대로 유지
      {
        source: '/about',
        destination: '/ui/about',
      },
      {
        source: '/contact',
        destination: '/ui/contact',
      },
      {
        source: '/faq',
        destination: '/ui/faq',
      },
      {
        source: '/forgot-password',
        destination: '/ui/forgot-password',
      },
      {
        source: '/help',
        destination: '/ui/help',
      },
      {
        source: '/login',
        destination: '/ui/login',
      },
      {
        source: '/my-page',
        destination: '/ui/my-page',
      },
      {
        source: '/privacy',
        destination: '/ui/privacy',
      },
      {
        source: '/search',
        destination: '/ui/search',
      },
      {
        source: '/signup',
        destination: '/ui/signup',
      },
      {
        source: '/terms',
        destination: '/ui/terms',
      },
      {
        source: '/studies',
        destination: '/ui/studies',
      },
      {
        source: '/studies/create',
        destination: '/ui/studies/create',
      },
      {
        source: '/studies/:id',
        destination: '/ui/studies/:id',
      },
      {
        source: '/sidejob/:id/apply',
        destination: '/ui/sidejob/:id/apply',
      },
    ];
  },
};

module.exports = nextConfig;

