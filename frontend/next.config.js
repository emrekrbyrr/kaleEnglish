/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
      },
    ],
  },
};

module.exports = nextConfig;
