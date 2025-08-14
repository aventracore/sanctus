import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import FeatureCards from '@/components/FeatureCards';
import HowItWorks from '@/components/HowItWorks';
import ChartCard from '@/components/ChartCard';
import KPIStat from '@/components/KPIStat';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { getKpis, getTimeseries } from '@/lib/mockApi';

export default function Page() {
	const kpis = getKpis();
	const ts = getTimeseries('all', '24h');
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'PulseTrack',
		description: 'Live social analytics to cut reporting time 60% and find high‑converting posts 2× faster.',
		url: 'https://pulsetrack.example.com',
	};
	return (
		<>
			<script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<section className="section">
				<div className="container-content">
					<SectionHeader eyebrow="Make it obvious" title="Everything you need to act fast" lead="A crisp system that keeps the team aligned and the work moving." />
					<div className="mt-8">
						<FeatureCards />
					</div>
				</div>
			</section>
			<HowItWorks />
			<section className="section">
				<div className="container-content grid md:grid-cols-2 gap-6 items-start">
					<div className="grid grid-cols-2 gap-4">
						{kpis.map((k) => (<KPIStat key={k.label} label={k.label} value={k.value} delta={k.delta} />))}
					</div>
					<ChartCard title="Engagement (24h)" data={ts} />
				</div>
			</section>
			<section className="section">
				<div className="container-content grid md:grid-cols-3 gap-6 items-start">
					<div className="md:col-span-2"><Testimonials /></div>
					<div>
						<FAQ />
					</div>
				</div>
			</section>
		</>
	);
}