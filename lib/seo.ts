import { DefaultSeoProps } from 'next-seo';

export const site = {
	name: 'PulseTrack',
	description:
		'PulseTrack helps growth teams cut reporting time 60% and find high-converting content 2× faster with live insights, automation, and an elegant workflow.',
	url: process.env.SITE_URL || 'https://pulsetrack.example.com',
};

export const defaultSEO: DefaultSeoProps = {
	titleTemplate: '%s — PulseTrack',
	defaultTitle: 'PulseTrack — Social analytics you actually enjoy using',
	description: site.description,
	canonical: site.url,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: 'PulseTrack',
		url: site.url,
		images: [{ url: `${site.url}/opengraph-image` }],
	},
	twitter: { cardType: 'summary_large_image' },
};