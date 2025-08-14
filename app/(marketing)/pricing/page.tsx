import SectionHeader from '@/components/SectionHeader';
import PricingSection from '@/components/Pricing';

export const metadata = { title: 'Pricing' };

export default function PricingPage() {
	return (
		<div className="section">
			<div className="container-content space-y-8">
				<SectionHeader eyebrow="Straightforward" title="Plans that scale with your team" lead="Switch between monthly and annual. Slide seats to model your cost." />
				<PricingSection />
			</div>
		</div>
	);
}