/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // 서버 배포 시 필요한 파일들만 포함
};

module.exports = nextConfig;

