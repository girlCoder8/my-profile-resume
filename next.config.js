const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' // note: see below
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
});