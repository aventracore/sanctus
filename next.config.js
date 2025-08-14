/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	images: {
		domains: ['images.unsplash.com'],
	},
	experimental: {
		mdxRs: true,
	},
};

module.exports = withMDX(nextConfig);