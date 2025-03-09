import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/", // When someone visits the root
        destination: "/home", // Redirect to /home
        permanent: true, // Use 308 for permanent redirect (or false for 307 temporary)
      },
    ];
  },
};

export default nextConfig;
