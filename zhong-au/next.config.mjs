/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
            // Contact now closes every page in the site footer.
            { source: "/contact", destination: "/#contact", permanent: true },
        ];
    },
};

export default nextConfig;
