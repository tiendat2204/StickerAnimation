import type { NextConfig } from 'next';

const nextConfig = {
    webpack(config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })

        return config
    },
    trailingSlash: true,
    images: {
        domains: [
            'github.com',
            'avatars.githubusercontent.com'
        ],
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
}
export default nextConfig;
