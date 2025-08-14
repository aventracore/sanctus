import SectionHeader from '@/components/SectionHeader';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata = { title: 'Features' };

export default function FeaturesPage() {
	return (
		<div className="section">
			<div className="container-content space-y-12">
				<SectionHeader eyebrow="System" title="Under the hood, tuned for speed" lead="From ingestion to insights to collaboration, PulseTrack is engineered for clarity and momentum." />
				<div className="grid md:grid-cols-2 gap-6">
					<div className="card p-6"><h3 className="font-semibold text-lg">Data ingestion</h3><p className="text-white/70 mt-2">We connect via first‑party APIs and stream updates every few seconds. Our pipeline deduplicates, normalizes, and enriches events in real-time.</p></div>
					<div className="card p-6"><h3 className="font-semibold text-lg">Cross‑platform insights</h3><p className="text-white/70 mt-2">Unified metrics across Twitter, Instagram, TikTok, and LinkedIn with defensible definitions and apples‑to‑apples comparisons.</p></div>
					<div className="card p-6"><h3 className="font-semibold text-lg">Scheduling</h3><p className="text-white/70 mt-2">Exports you can trust—weekly, monthly, or custom cycles. Share a link or deliver polished PDFs to stakeholders.</p></div>
					<div className="card p-6"><h3 className="font-semibold text-lg">Anomaly alerts</h3><p className="text-white/70 mt-2">We notify you when engagement deviates from baseline so you can amplify wins and triage drops quickly.</p></div>
					<div className="card p-6"><h3 className="font-semibold text-lg">Collaboration</h3><p className="text-white/70 mt-2">Comment threads, mentions, and saved views help teams push work forward without hopping tools.</p></div>
					<div className="card p-6"><h3 className="font-semibold text-lg">Performance</h3><p className="text-white/70 mt-2">Careful code-splitting, streaming, and edge caching keep interactions fluid on any device.</p></div>
				</div>
				<ComparisonTable />
			</div>
		</div>
	);
}