/** Next.js config - tuned for Vercel builds */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      nodemailer: false,
      '@sendgrid/mail': false,
    }
    return config
  },
}

module.exports = nextConfig
