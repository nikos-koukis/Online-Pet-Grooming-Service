/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_USER : 'nikoskoukis',
    DB_PASS : 'ef7ww0nikokouk2',
    DB_CLUSTER : 'cluster0',
  },
}

module.exports = nextConfig
