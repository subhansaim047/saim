/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/food-safety-templates/two-stage-cooling-method',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cooling-food-methods-poster',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cooling-food-methods',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/two-stage-cooling',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
