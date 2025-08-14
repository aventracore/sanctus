import { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
	Analytics: <Icon path="M4 18V6m6 12V10m6 8V4m4 14H2" />,
	Insights: <Icon path="M12 6v6l4 2" />,
	Automation: <Icon path="M6 12h12M9 9l-3 3 3 3" />,
	Collaboration: <Icon path="M8 17a4 4 0 100-8 4 4 0 000 8zm8 3v-2a4 4 0 10-2-7.465" />,
	Security: <Icon path="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />,
	Speed: <Icon path="M13 10h7M4 13l5-5" />,
};

function Icon({ path }: { path: string }) {
	return (
		<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d={path} />
		</svg>
	);
}

export default function FeatureCards() {
	const features = [
		{ title: 'Live analytics', desc: 'Second-by-second engagement, CTR, and conversions across platforms.', icon: 'Analytics' },
		{ title: 'Actionable insights', desc: 'Automatic highlights point you to what’s working and why.', icon: 'Insights' },
		{ title: 'Automation', desc: 'Scheduled exports and alerts keep stakeholders aligned without manual prep.', icon: 'Automation' },
		{ title: 'Collaboration', desc: 'Comment on spikes, share saved views, and ship faster with context.', icon: 'Collaboration' },
		{ title: 'Security', desc: 'SSO, audit logs, and permissions baked-in for peace of mind.', icon: 'Security' },
		{ title: 'Speed', desc: 'Built for performance—no waiting for dashboards to load.', icon: 'Speed' },
	];
	return (
		<div className="grid md:grid-cols-3 gap-4 md:gap-6">
			{features.map((f) => (
				<div key={f.title} className="card p-5 hover:shadow-softLg transition-transform will-change-transform hover:-translate-y-0.5">
					<div className="h-10 w-10 rounded-md bg-gradient-to-r from-brand-from to-brand-to text-white grid place-content-center">{icons[f.icon]}</div>
					<h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
					<p className="text-white/70 mt-1">{f.desc}</p>
				</div>
			))}
		</div>
	);
}