"use client";
import { useMemo, useState } from 'react';

const tiers = [
	{ name: 'Starter', base: 19, features: ['Live dashboard', 'Basic exports', 'Email support'] },
	{ name: 'Growth', base: 59, features: ['Everything in Starter', 'Insights & alerts', 'Priority support'] },
	{ name: 'Pro', base: 129, features: ['Everything in Growth', 'SSO & roles', 'Audit logs'] },
];

export default function PricingSection() {
	const [annual, setAnnual] = useState(true);
	const [seats, setSeats] = useState(5);
	const prices = useMemo(() => tiers.map(t => ({ ...t, price: Math.round((t.base + seats * (t.base / 10)) * (annual ? 10 : 1)) })), [annual, seats]);
	return (
		<div>
			<div className="flex items-center justify-center gap-3 mb-6">
				<span className={!annual ? 'text-white' : 'text-white/60'}>Monthly</span>
				<button onClick={() => setAnnual(!annual)} className="relative h-6 w-12 rounded-full bg-elev1 border border-border-subtle">
					<span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : 'translate-x-1'}`} />
				</button>
				<span className={annual ? 'text-white' : 'text-white/60'}>Annual</span>
			</div>
			<div className="max-w-lg mx-auto card p-6 mb-8">
				<label className="text-sm text-white/70">Seats: {seats}</label>
				<input type="range" min={1} max={50} value={seats} onChange={(e) => setSeats(Number(e.target.value))} className="w-full" />
				<p className="text-white/70 text-sm mt-2">Prices update instantly per plan.</p>
			</div>
			<div className="grid md:grid-cols-3 gap-4 md:gap-6">
				{prices.map(p => (
					<div key={p.name} className="card p-6">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold text-lg">{p.name}</h3>
							{p.name === 'Growth' && <span className="text-xs rounded-full bg-brand-from/20 text-white px-2 py-1">Most popular</span>}
						</div>
						<div className="mt-2 text-3xl font-bold">${p.price}<span className="text-sm font-normal text-white/60">/{annual ? 'yr' : 'mo'}</span></div>
						<ul className="mt-4 space-y-2 text-white/70 text-sm">
							{p.features.map((f: string) => (<li key={f}>✓ {f}</li>))}
						</ul>
						<button className="mt-6 w-full rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">Choose {p.name}</button>
					</div>
				))}
			</div>
		</div>
	);
}