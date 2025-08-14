import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolink from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import { BlogJsonLd, NextSeo } from 'next-seo';
import SectionHeader from '@/components/SectionHeader';

export async function generateStaticParams() {
	return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
	const { data, content, toc } = getPostBySlug(params.slug);
	return (
		<div className="section">
			<NextSeo title={String(data.title)} description={String(data.excerpt)} />
			<BlogJsonLd
				authorName={String(data.author || 'PulseTrack Team')}
				description={String(data.excerpt)}
				datePublished={String(data.date)}
				title={String(data.title)}
				images={['/opengraph-image']}
			/>
			<div className="container-content grid md:grid-cols-[1fr,280px] gap-10">
				<article className="prose prose-invert max-w-none">
					<h1 className="text-3xl font-bold tracking-tight">{String(data.title)}</h1>
					<MDXRemote source={content} options={{ mdxOptions: { rehypePlugins: [rehypeSlug, rehypeAutolink, rehypeHighlight] } }} />
				</article>
				<aside className="hidden md:block sticky top-24 h-max">
					<SectionHeader title="On this page" />
					<ol className="mt-4 space-y-2 text-sm text-white/70">
						{toc.map((h: string) => (
							<li key={h}><a href={`#${h.toLowerCase().replace(/\s+/g, '-')}`}>{h}</a></li>
						))}
					</ol>
				</aside>
			</div>
		</div>
	);
}