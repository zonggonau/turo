import withPWAInit from 'nextjs-pwa';
/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
    dest: 'public',
})
const nextConfig = {};

// export default nextConfig;


export default withPWA({
    nextConfig
})
