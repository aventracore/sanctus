import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type PostMeta = { slug: string; title: string; excerpt: string; tags: string[]; author: string; date: string; readingTime: string };

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): PostMeta[] {
	const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
	return files.map((file) => {
		const slug = file.replace(/\.mdx$/, '');
		const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
		const { data, content } = matter(raw);
		return {
			slug,
			title: data.title,
			excerpt: data.excerpt,
			tags: data.tags || [],
			author: data.author || 'PulseTrack Team',
			date: data.date || new Date().toISOString(),
			readingTime: readingTime(content).text,
		};
	}).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
	const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
	const parsed = matter(raw);
	const toc = Array.from(parsed.content.matchAll(/^#{1,3}\s+(.+)$/gm)).map((m) => m[1]);
	return { ...parsed, toc };
}