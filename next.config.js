/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_USER : '',
    DB_PASS : '',
    DB_CLUSTER : '',
  },
}

module.exports = nextConfig
