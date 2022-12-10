/** @type {import('next').NextConfig} */

const withImages = require("next-images");

module.exports = withImages({

  reactStrictMode: true,

  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },


  env: {
    'MYSQL_HOST': '190.231.67.172',
    'MYSQL_PORT': '5506',
    'MYSQL_DATABASE': "clubwerchow",
    'MYSQL_USER': "vlongo",
    'MYSQL_PASSWORD': "nokia5800",
  },

  images: {
    domains: ['clubwerchow.com, clubwerchow.com.ar, clubwerchowpag.vercel.app'],
    // formats: ['image/avif', 'image/webp'],
  },


})