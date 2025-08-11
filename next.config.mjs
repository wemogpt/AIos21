/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the crucial part.
  // It tells Next.js to also transpile the code from your local packages.
  transpilePackages: ["@ipollo/core-config", "@ipollo/card-sdk"],
  experimental: {
    // This can help with resolving modules in a monorepo-like setup.
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
