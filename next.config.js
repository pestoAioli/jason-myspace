/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['web.archive.org', 'thumbs.dreamstime.com']
  }
}

module.exports = nextConfig
