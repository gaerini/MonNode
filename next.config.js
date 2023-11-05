const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions:
    process.env.APP_ENV === "production"
      ? ["page.tsx", "api.ts"]
      : ["page.tsx", "api.ts"],
};

module.exports = nextConfig;
