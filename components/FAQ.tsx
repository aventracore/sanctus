"use client";
import { useState } from 'react';

const faqs = [
	{ q: 'How does PulseTrack connect to our channels?', a: 'Use OAuth to connect Twitter, Instagram, TikTok, and LinkedIn in minutes. We only request read scopes and never post on your behalf.' },
	{ q: 'Is my data secure?', a: 'Yes. We support SSO, role-based access, and encryption at rest and in transit. We also maintain audit logs for every project.' },
	{ q: 'Can I export and schedule reports?', a: 'Absolutely. Create reusable exports and schedule weekly or monthly delivery to stakeholders with one click.' },
];

export default function FAQ() {
	const [open, setOpen] = useState<number | null>(0);
	return (
		<div className="card divide-y divide-border-subtle">
			{faqs.map((f, i) => (
				<div key={f.q}>
					<button className="w-full text-left px-4 py-3 flex items-center justify-between" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
						<span className="font-medium">{f.q}</span>
						<span>{open === i ? '−' : '+'}</span>
					</button>
					<div id={`faq-${i}`} role="region" className={`px-4 pb-4 text-white/70 ${open === i ? 'block' : 'hidden'}`}>{f.a}</div>
				</div>
			))}
		</div>
	);
}