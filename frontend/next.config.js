/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVERPORT: "http://localhost:2000",
    DATABASE_URL:
      "mongodb+srv://AlanWang:Wangfengyu2344@studyweb.zpefl.mongodb.net/?retryWrites=true&w=majority",
    GOOGLE_ID:
      "860611975588-qbmtfvon5ah0lulvtca9let582ef7qnc.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "46a0d54003a9c769761950c3c062b323",
  },
};

module.exports = nextConfig;
