import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolink from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
// JSON-LD injected manually
import SectionHeader from '@/components/SectionHeader';
import { site } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateStaticParams() {
	return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const { data } = getPostBySlug(params.slug);
	return {
		title: String(data.title),
		description: String(data.excerpt),
		openGraph: {
			title: String(data.title),
			description: String(data.excerpt),
			url: `${site.url}/blog/${params.slug}`,
			images: [{ url: `${site.url}/opengraph-image` }],
		},
		alternates: { canonical: `${site.url}/blog/${params.slug}` },
	};
}

export default function PostPage({ params }: { params: { slug: string } }) {
	const { data, content, toc } = getPostBySlug(params.slug);
	return (
		<div className="section">
			<script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: String(data.title),
				description: String(data.excerpt),
				url: `${site.url}/blog/${params.slug}`,
				image: [`${site.url}/opengraph-image`],
				datePublished: String(data.date),
				author: { "@type": "Person", name: String(data.author || 'PulseTrack Team') },
			}) }} />
			<div className="container-content grid md:grid-cols-[1fr,280px] gap-10">
				<article className="prose prose-invert max-w-none">
					<h1 className="text-3xl font-bold tracking-tight">{String(data.title)}</h1>
					<MDXRemote source={content} options={{ mdxOptions: { rehypePlugins: [rehypeSlug as any, rehypeAutolink as any, rehypeHighlight as any] } } as any} />
				</article>
				<aside className="hidden md:block sticky top-24 h-max">
					<SectionHeader title="On this page" />
					<ol className="mt-4 space-y-2 text-sm text-white/70">
						{(toc as string[]).filter(Boolean).map((h) => (
							<li key={h}><a href={`#${h.toLowerCase().replace(/\s+/g, '-')}`}>{h}</a></li>
						))}
					</ol>
				</aside>
			</div>
		</div>
	);
}