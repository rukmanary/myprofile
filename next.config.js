/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(process.env.R2_PUBLIC_URL || 'https://localhost').hostname,
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig