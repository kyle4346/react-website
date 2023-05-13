/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "th.bing.com",
      "www.characterlives.org",
      "clipground.com",
      "pluspng.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Referrer-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  connect-src https://kyle-cortez.com/_next/static/css/8330f9509ea4c374.css	ws://kyle-cortez.com/_next/webpack-hmr http://kyle-cortez.com/_next/static/development/_devMiddlewareManifest.json;
  img-src 'self' pluspng.com img.icons8.com icons.iconarchive.com www.file-extensions.org icon-library.com cdn4.iconfinder.com th.bing.com;
  child-src none;
  style-src 'self' 'unsafe-inline' ;
  font-src 'self' https://fonts.google.com/;
`;

module.exports = nextConfig;
