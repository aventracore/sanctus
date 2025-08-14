"use client";
import { useEffect, useState } from 'react';

const items = [
	{ quote: 'PulseTrack cut our reporting time from two days to under an hour. The team finally looks forward to analytics.', name: 'Maya Patel', role: 'Head of Growth, Acorn CRM' },
	{ quote: 'The live pulse view helped us catch a post that was taking off—doubling conversions that day.', name: 'Luis Romero', role: 'Marketing Lead, DriftCycle' },
	{ quote: 'We replaced three dashboards with one. Stakeholders get the insights, not just charts.', name: 'Ava Chen', role: 'VP Marketing, Northbeam Labs' },
];

export default function Testimonials() {
	const [i, setI] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
		return () => clearInterval(id);
	}, []);
	const idx = items.length ? i % items.length : 0;
	const current = items[idx]!;
	return (
		<div className="card p-6">
			<figure>
				<blockquote className="text-lg md:text-xl leading-relaxed">“{current.quote}”</blockquote>
				<figcaption className="mt-3 text-white/70">{current.name} — {current.role}</figcaption>
			</figure>
			<div className="mt-4 flex gap-2" role="tablist" aria-label="Testimonials">
				{items.map((_, idx2) => (
					<button key={idx2} role="tab" aria-selected={idx2 === idx} className={`h-2.5 w-2.5 rounded-full ${idx2 === idx ? 'bg-white' : 'bg-white/40'}`} onClick={() => setI(idx2)} aria-label={`Show quote ${idx2 + 1}`} />
				))}
			</div>
		</div>
	);
}