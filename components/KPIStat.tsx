import AnimatedNumber from './AnimatedNumber';

export default function KPIStat({ label, value, delta }: { label: string; value: number; delta?: number }) {
	const up = (delta ?? 0) >= 0;
	return (
		<div className="card p-4 md:p-6">
			<div className="text-sm text-white/60">{label}</div>
			<div className="mt-2 text-2xl md:text-3xl font-semibold flex items-baseline gap-2">
				<AnimatedNumber value={value} />
				{typeof delta === 'number' && (
					<span className={`${up ? 'text-success' : 'text-danger'} text-sm`}>{up ? '▲' : '▼'} {Math.abs(delta)}%</span>
				)}
			</div>
		</div>
	);
}