export default function CaseStudy({ company, metric, summary }: { company: string; metric: string; summary: string }) {
	return (
		<div className="card p-5">
			<div className="text-sm text-white/60">{company}</div>
			<div className="text-2xl font-semibold mt-1">{metric}</div>
			<p className="text-white/70 mt-2">{summary}</p>
		</div>
	);
}