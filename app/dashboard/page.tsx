"use client";
import { useEffect, useMemo, useState } from 'react';
import KPIStat from '@/components/KPIStat';
import ChartCard from '@/components/ChartCard';
import DataTable from '@/components/DataTable';
import Toast from '@/components/Toast';
import { getKpis, getTimeseries, getTopPosts, subscribeUpdates } from '@/lib/mockApi';

function useLocalStorage<T>(key: string, initial: T) {
	const [state, setState] = useState<T>(() => {
		try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : initial; } catch { return initial; }
	});
	useEffect(() => { localStorage.setItem(key, JSON.stringify(state)); }, [key, state]);
	return [state, setState] as const;
}

export default function DashboardPage() {
	const [authed, setAuthed] = useLocalStorage<boolean>('pt_demo_authed', false);
	const [theme, setTheme] = useLocalStorage<'system' | 'light' | 'dark'>('pt_theme', 'system');
	const [profile, setProfile] = useLocalStorage('pt_profile', { name: 'Alex Rivera', handle: '@alex', timezone: 'UTC' });
	const [kpis, setKpis] = useState(getKpis());
	const [series, setSeries] = useState(getTimeseries('all', '24h'));
	const [toast, setToast] = useState<string | null>(null);

	useEffect(() => {
		const unsub = subscribeUpdates(() => { setKpis(getKpis()); setSeries(getTimeseries('all', '24h')); });
		return unsub;
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove('dark');
		if (theme === 'dark') root.classList.add('dark');
		if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) root.classList.add('dark');
	}, [theme]);

	const topPosts = useMemo(() => getTopPosts(), []);

	if (!authed) {
		return (
			<div className="min-h-[60vh] grid place-content-center p-6">
				<div className="card p-6 w-[min(96vw,420px)]">
					<h1 className="text-2xl font-semibold">Demo login</h1>
					<p className="text-white/70">No account needed. Click below to enter the live demo.</p>
					<button onClick={() => setAuthed(true)} className="mt-4 w-full rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">Enter dashboard</button>
				</div>
			</div>
		);
	}

	return (
		<div className="section">
			<div className="container-content grid md:grid-cols-[220px,1fr] gap-6">
				<aside className="card p-4 h-max sticky top-24">
					<nav className="space-y-1 text-sm">
						<a href="#overview" className="block px-3 py-2 rounded-md hover:bg-elev2">Overview</a>
						<a href="#posts" className="block px-3 py-2 rounded-md hover:bg-elev2">Top posts</a>
						<a href="#settings" className="block px-3 py-2 rounded-md hover:bg-elev2">Settings</a>
					</nav>
				</aside>
				<section className="space-y-8">
					<div id="overview" className="grid md:grid-cols-4 gap-4">
						{kpis.map((k) => (<KPIStat key={k.label} label={k.label} value={k.value} delta={k.delta} />))}
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<ChartCard title="Engagement (24h)" data={series} />
						<ChartCard title="Platform comparison" data={[
							{ label: 'Twitter', value: 420 },
							{ label: 'Instagram', value: 580 },
							{ label: 'TikTok', value: 690 },
							{ label: 'LinkedIn', value: 360 },
						]} type="bar" />
					</div>
					<div id="posts">
						<h2 className="text-xl font-semibold mb-3">Top posts</h2>
						<DataTable rows={topPosts} />
					</div>
					<div id="settings" className="card p-6">
						<h2 className="text-xl font-semibold">Settings</h2>
						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<div>
								<label className="text-sm text-white/70">Theme</label>
								<select value={theme} onChange={(e) => setTheme(e.target.value as any)} className="mt-1 rounded-md bg-elev2 border border-border-subtle px-3 py-2 w-full">
									<option value="system">System</option>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
								</select>
							</div>
							<div>
								<label className="text-sm text-white/70">Display name</label>
								<input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="mt-1 rounded-md bg-elev2 border border-border-subtle px-3 py-2 w-full" />
							</div>
							<div>
								<label className="text-sm text-white/70">Handle</label>
								<input value={profile.handle} onChange={(e) => setProfile({ ...profile, handle: e.target.value })} className="mt-1 rounded-md bg-elev2 border border-border-subtle px-3 py-2 w-full" />
							</div>
							<div>
								<label className="text-sm text-white/70">Timezone</label>
								<select value={profile.timezone} onChange={(e) => setProfile({ ...profile, timezone: e.target.value })} className="mt-1 rounded-md bg-elev2 border border-border-subtle px-3 py-2 w-full">
									<option value="UTC">UTC</option>
									<option value="PST">PST</option>
									<option value="EST">EST</option>
								</select>
							</div>
						</div>
						<button onClick={() => setToast('Settings saved')} className="mt-4 rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">Save changes</button>
					</div>
				</section>
			</div>
			<Toast open={!!toast} message={toast || ''} onClose={() => setToast(null)} />
		</div>
	);
}