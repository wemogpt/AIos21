/** @type {import('next').NextConfig} */
const nextConfig = {
  // 这是最关键的一行。它告诉 Next.js 需要编译我们本地的包。
  transpilePackages: ["@ipollo/core-config", "@ipollo/card-sdk"],
  experimental: {
    // 这有助于在 monorepo 结构中解决模块依赖问题。
    serverComponentsExternalPackages: ["@ipollo/core-config", "@ipollo/card-sdk"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
