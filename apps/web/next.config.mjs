/**
 * @type { import('next').NextConfig }
 */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  images: {
    domains: [
      'res.cloudinary.com',
      'assets-global.website-files.com',
      'terratritium.com',
    ],
  },

  transpilePackages: ['@terratritium/ui'],
}

export default nextConfig
