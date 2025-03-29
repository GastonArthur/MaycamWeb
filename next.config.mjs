/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
}

export default nextConfig;
