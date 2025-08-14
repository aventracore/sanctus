"use client";
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type PostRow = { id: string; platform: string; title: string; date: string; impressions: number; ctr: number };

const MTr: any = (motion as any).tr ?? (motion as any)('tr');

export default function DataTable({ rows }: { rows: PostRow[] }) {
	const [sort, setSort] = useState<{ key: keyof PostRow; dir: 'asc' | 'desc' }>({ key: 'impressions', dir: 'desc' });
	const [platform, setPlatform] = useState<string>('all');
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => rows
		.filter(r => (platform === 'all' ? true : r.platform === platform))
		.filter(r => r.title.toLowerCase().includes(query.toLowerCase())), [rows, platform, query]);

	const sorted = useMemo(() => [...filtered].sort((a, b) => {
		const dir = sort.dir === 'asc' ? 1 : -1;
		const av = a[sort.key];
		const bv = b[sort.key];
		if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir;
		return String(av).localeCompare(String(bv)) * dir;
	}), [filtered, sort]);

	useEffect(() => {
		// ensure stable animation list keys
	}, []);

	const setSortKey = (key: keyof PostRow) => setSort((prev) => ({ key, dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc' }));

	return (
		<div className="card p-4 md:p-6">
			<div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
				<div className="flex items-center gap-2">
					<label className="text-sm text-white/70">Platform</label>
					<select value={platform} onChange={(e) => setPlatform(e.target.value)} className="rounded-md bg-elev2 border border-border-subtle px-3 py-2">
						<option value="all">All</option>
						<option>Twitter</option>
						<option>Instagram</option>
						<option>TikTok</option>
						<option>LinkedIn</option>
					</select>
				</div>
				<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter posts" className="rounded-md bg-elev2 border border-border-subtle px-3 py-2 w-full md:w-64" />
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full text-sm">
					<thead className="text-white/70">
						<tr>
							<th className="text-left py-2 cursor-pointer" onClick={() => setSortKey('title')}>Post</th>
							<th className="text-left py-2 cursor-pointer" onClick={() => setSortKey('platform')}>Platform</th>
							<th className="text-left py-2 cursor-pointer" onClick={() => setSortKey('date')}>Date</th>
							<th className="text-right py-2 cursor-pointer" onClick={() => setSortKey('impressions')}>Impressions</th>
							<th className="text-right py-2 cursor-pointer" onClick={() => setSortKey('ctr')}>CTR</th>
						</tr>
					</thead>
					<tbody>
						<AnimatePresence initial={false}>
							{sorted.map((r) => (
								<MTr key={r.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-border-subtle">
									<td className="py-2 pr-4 whitespace-nowrap">{r.title}</td>
									<td className="py-2 pr-4">{r.platform}</td>
									<td className="py-2 pr-4">{r.date}</td>
									<td className="py-2 pr-4 text-right">{r.impressions.toLocaleString()}</td>
									<td className="py-2 text-right">{(r.ctr * 100).toFixed(1)}%</td>
								</MTr>
							))}
						</AnimatePresence>
					</tbody>
				</table>
			</div>
		</div>
	);
}