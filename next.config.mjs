/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats: AVIF (~50% smaller than WebP) then WebP, fallback to original
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days to avoid re-processing on every request
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
