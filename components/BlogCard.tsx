import Link from 'next/link';

export default function BlogCard({ slug, title, excerpt, tags, readingTime }: { slug: string; title: string; excerpt: string; tags: string[]; readingTime: string }) {
	return (
		<Link href={`/blog/${slug}`} className="block card p-5 hover:shadow-softLg transition-transform hover:-translate-y-0.5">
			<h3 className="font-semibold text-lg">{title}</h3>
			<p className="text-white/70 mt-1">{excerpt}</p>
			<div className="mt-3 flex items-center gap-2 text-xs text-white/60">
				{tags.map((t) => (<span key={t} className="rounded-full bg-elev2 border border-border-subtle px-2 py-1">{t}</span>))}
				<span className="ml-auto">{readingTime}</span>
			</div>
		</Link>
	);
}