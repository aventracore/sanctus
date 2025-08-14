"use client";
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '@/lib/seo';

export default function DefaultSeoClient() {
	return <DefaultSeo {...defaultSEO} />;
}