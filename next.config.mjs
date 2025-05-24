/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/telegram',
        destination: 'https://t.me/uzinfocom_oss',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
