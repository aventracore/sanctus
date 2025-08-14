import SectionHeader from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata = { title: 'Blog' };

export default function BlogIndexPage() {
	const posts = getAllPosts();
	return (
		<div className="section">
			<div className="container-content space-y-10">
				<SectionHeader eyebrow="Perspectives" title="Notes from the craft" lead="Tactics and frameworks for fast, honest learning in growth." />
				<div className="grid md:grid-cols-2 gap-6">
					{posts.map((p) => (
						<BlogCard key={p.slug} slug={p.slug} title={p.title} excerpt={p.excerpt} tags={p.tags} readingTime={p.readingTime} />
					))}
				</div>
			</div>
		</div>
	);
}