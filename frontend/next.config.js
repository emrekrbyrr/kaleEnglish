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
  async redirects() {
    return [
      {
        source: "/rental",
        destination: "/suspended-platform-rental-africa-europe",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
