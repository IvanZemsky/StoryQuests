import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
        },
      ],
    },
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      )

      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(import.meta.url, 'src'),
      }
  
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
          use: ['@svgr/webpack'],
        },
      )
  
      fileLoaderRule.exclude = /\.svg$/i
  
      return config
    },
};

export default nextConfig;
