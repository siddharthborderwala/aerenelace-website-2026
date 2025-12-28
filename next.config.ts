import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/products/:path",
      destination: "/products",
      permanent: false,
    },
  ],
};

export default nextConfig;
