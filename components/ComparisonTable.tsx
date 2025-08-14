export default function ComparisonTable() {
	const rows = [
		{ feature: 'Live streaming metrics', ours: '✓', theirs: '–' },
		{ feature: 'Automated insights', ours: '✓', theirs: 'Partial' },
		{ feature: 'Collaboration & comments', ours: '✓', theirs: '–' },
		{ feature: 'Exports & schedules', ours: '✓', theirs: '✓' },
		{ feature: 'SSO & permissions', ours: '✓', theirs: 'Add-on' },
	];
	return (
		<div className="overflow-x-auto card">
			<table className="min-w-full text-sm">
				<thead className="text-left text-white/70">
					<tr>
						<th className="p-4">Capability</th>
						<th className="p-4">PulseTrack</th>
						<th className="p-4">Generic tool</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((r) => (
						<tr key={r.feature} className="border-t border-border-subtle">
							<td className="p-4">{r.feature}</td>
							<td className="p-4">{r.ours}</td>
							<td className="p-4">{r.theirs}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}