/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mosaic.scdn.co",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
