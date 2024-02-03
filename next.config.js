/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // if your website has no www, drop it
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },




  // images: {
  //   domains: ["res.cloudinary.com"], // Add your Cloudinary domain here
  // },
};

module.exports = nextConfig
