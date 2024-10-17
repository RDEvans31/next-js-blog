/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nomadiclifter.com",
        port: "",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
        port: "",
        pathname: "/image/fetch/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
