/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    if (!isServer) {
      config.watchOptions = {
        ignored: ['/Users/davidjm/temp/systeome/web/the-systeome-project/**']
        // or you can simply ignore node_modules
        // ignored: ['node_modules/**']
      }
    }
    return config;
  }
};

export default nextConfig;
