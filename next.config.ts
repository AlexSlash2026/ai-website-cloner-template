import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/new',       // Указываем вашу подпапку
  trailingSlash: true,    // Важно для избежания 404 на вложенных страницах
};

export default nextConfig;