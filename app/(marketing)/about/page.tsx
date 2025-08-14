import SectionHeader from '@/components/SectionHeader';
import TeamCard from '@/components/TeamCard';

export const metadata = { title: 'About' };

export default function AboutPage() {
	return (
		<div className="section">
			<div className="container-content space-y-10">
				<SectionHeader eyebrow="Story" title="Why we built PulseTrack" lead="We design tools that respect your time and help you learn faster." />
				<div className="relative pl-6">
					<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-from to-brand-to rounded-full" />
					<ul className="space-y-8">
						<li><div className="text-sm text-white/60">2022</div><div className="font-semibold">First prototype</div><p className="text-white/70">We sketched a dashboard that answered a simple question: what’s working right now?</p></li>
						<li><div className="text-sm text-white/60">2023</div><div className="font-semibold">Live pulse view</div><p className="text-white/70">We introduced a real-time stream of engagement, with smart highlights that reduce noise.</p></li>
						<li><div className="text-sm text-white/60">2024</div><div className="font-semibold">Automation & collaboration</div><p className="text-white/70">Scheduling, comments, and saved views made analytics a shared craft—not a chore.</p></li>
					</ul>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					<TeamCard name="Jordan Lee" role="Design" bio="Designing humane systems, obsessed with micro‑interactions and clarity." />
					<TeamCard name="Riley Singh" role="Engineering" bio="Loves performance work, type-safety, and carefully tuned animations." />
					<TeamCard name="Morgan Diaz" role="Product" bio="Keeps us honest about outcomes and shipping the right thing." />
				</div>
			</div>
		</div>
	);
}