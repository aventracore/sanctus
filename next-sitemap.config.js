/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://pulsetrack.example.com',
	generateRobotsTxt: true,
	generateIndexSitemap: true,
	exclude: ['/dashboard', '/not-found'],
};