import { fileURLToPath } from 'url';
import { dirname } from 'path';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // Specify the output directory
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: 'file-loader',
    });

    return config;
  },
};

export default nextConfig;