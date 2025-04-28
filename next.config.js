/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ['leaflet', 'react-leaflet'],
}

module.exports = nextConfig 