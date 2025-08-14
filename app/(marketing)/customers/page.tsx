import SectionHeader from '@/components/SectionHeader';
import CaseStudy from '@/components/CaseStudy';

export const metadata = { title: 'Customers' };

export default function CustomersPage() {
	return (
		<div className="section">
			<div className="container-content space-y-10">
				<SectionHeader eyebrow="Proof" title="Teams ship faster with PulseTrack" lead="Fabricated but realistic stories from plausible companies." />
				<div className="grid md:grid-cols-3 gap-6">
					<CaseStudy company="Acorn CRM" metric="60% faster reporting" summary="Marketing ops replaced manual spreadsheets with scheduled exports and a live pulse board." />
					<CaseStudy company="DriftCycle" metric="2× faster insights" summary="Growth caught breakout posts within minutes and doubled conversions day-of." />
					<CaseStudy company="Northbeam Labs" metric="1 dashboard, 5 teams" summary="PMM, Sales, and Execs finally aligned on one set of metrics and context." />
				</div>
			</div>
		</div>
	);
}