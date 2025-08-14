"use client";
import { useEffect, useRef, useState } from 'react';

const steps = [
	{ title: 'Connect your channels', desc: 'Authorize Twitter, Instagram, TikTok, and LinkedIn in minutes.' },
	{ title: 'See the live pulse', desc: 'Watch engagement roll in and spot spikes with zero setup.' },
	{ title: 'Act with confidence', desc: 'Share highlights, schedule reports, and iterate faster.' },
];

export default function HowItWorks() {
	const [active, setActive] = useState(0);
	const refs = useRef<HTMLDivElement[]>([]);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index)); });
		}, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
		refs.current.forEach((el) => el && observer.observe(el));
		return () => observer.disconnect();
	}, []);
	return (
		<section className="section">
			<div className="container-content grid md:grid-cols-2 gap-8 items-start">
				<div className="sticky top-24 hidden md:block">
					<div className="relative h-[360px] rounded-xl overflow-hidden bg-gradient-to-br from-brand-from/20 to-brand-to/10 border border-border-subtle">
						<div className="absolute inset-6 rounded-lg bg-elev1 border border-border-subtle shadow-soft" />
						<div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-brand-from/20 blur-2xl" />
					</div>
				</div>
				<div className="space-y-16">
					{steps.map((s, i) => (
						<div key={s.title} data-index={i} ref={(el) => { if (el) refs.current[i] = el; }} className="">
							<div className="text-sm text-white/60">Step {i + 1}</div>
							<h3 className={`text-2xl font-semibold ${active === i ? 'gradient-text' : ''}`}>{s.title}</h3>
							<p className="text-white/70 mt-2 max-w-prose">{s.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}