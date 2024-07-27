import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
          },
        ],
      },
});

export default nextConfig;
