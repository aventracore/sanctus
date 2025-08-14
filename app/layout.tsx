import './globals.css';
import { Inter } from 'next/font/google';
import { site } from '@/lib/seo';
import DefaultSeoClient from '@/components/DefaultSeoClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SkipToContent } from '@/components/SkipToContent';
import MotionProvider from '@/components/MotionProvider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: {
		template: '%s — PulseTrack',
		default: 'PulseTrack — Social analytics you actually enjoy using',
	},
	description: site.description,
	metadataBase: new URL(site.url),
	icons: { icon: [{ url: '/icon.png', sizes: '64x64' }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} font-sans bg-surface text-text`}> 
				<DefaultSeoClient />
				<SkipToContent />
				<MotionProvider>
					<Navbar />
					<main id="main-content">{children}</main>
					<Footer />
				</MotionProvider>
			</body>
		</html>
	);
}