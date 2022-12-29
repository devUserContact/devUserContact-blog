/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true
}

const withTM = require("next-transpile-modules")(["three", "@react-three/fiber", "@react-three/drei"]);
module.exports = nextConfig, withTM;
