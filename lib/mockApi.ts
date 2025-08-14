type KPI = { label: string; value: number; delta: number };
let seed = 42;
function rng() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }

let kpis: KPI[] = [
	{ label: 'Followers', value: 12840, delta: 3 },
	{ label: 'Engagement', value: 642, delta: 8 },
	{ label: 'CTR', value: 42, delta: 2 },
	{ label: 'Conversions', value: 96, delta: -1 },
];

let timeseries = Array.from({ length: 24 }, (_, i) => ({ label: `${i}:00`, value: 200 + Math.round(rng() * 80) }));
let topPosts = Array.from({ length: 12 }, (_, i) => ({
	id: `p${i + 1}`,
	platform: ['Twitter', 'Instagram', 'TikTok', 'LinkedIn'][i % 4],
	title: ['Product tour thread', 'Founder video', 'Behind-the-scenes', 'Launch recap'][i % 4] + ` #${i + 1}`,
	date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
	impressions: 2000 + Math.round(rng() * 8000),
	ctr: 0.03 + rng() * 0.05,
}));

let interval: NodeJS.Timeout | null = null;

export function subscribeUpdates(cb: () => void) {
	if (!interval) {
		interval = setInterval(() => {
			kpis = kpis.map((k) => ({ ...k, value: k.value + Math.round(rng() * 30 - 12), delta: Math.round(rng() * 6 - 3) }));
			timeseries = timeseries.map((p, i) => ({ label: p.label, value: Math.max(80, p.value + Math.round(rng() * 20 - 10)) }));
			cb();
		}, 5000);
	}
	return () => {
		if (interval) clearInterval(interval);
		interval = null;
	};
}

export function getKpis() { return kpis; }
export function getTimeseries(platformOrAll: string = 'all', range: '24h' | '7d' | '30d' = '24h') {
	return timeseries;
}
export function getTopPosts() { return topPosts; }