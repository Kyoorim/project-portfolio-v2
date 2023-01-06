/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ready-to-use-components"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
