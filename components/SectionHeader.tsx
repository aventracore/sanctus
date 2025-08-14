export default function SectionHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
	return (
		<div className="text-center max-w-3xl mx-auto">
			{eyebrow && <div className="text-brand-from text-sm font-semibold tracking-wider uppercase">{eyebrow}</div>}
			<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2"><span className="gradient-text">{title}</span></h2>
			{lead && <p className="text-white/70 mt-3 leading-relaxed">{lead}</p>}
		</div>
	);
}