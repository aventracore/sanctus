export default function TeamCard({ name, role, bio }: { name: string; role: string; bio: string }) {
	return (
		<div className="card p-4 group">
			<div className="h-32 w-full rounded-md bg-gradient-to-br from-brand-from/30 to-brand-to/20" />
			<div className="mt-3">
				<div className="font-semibold">{name}</div>
				<div className="text-white/60 text-sm">{role}</div>
				<p className="text-white/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{bio}</p>
			</div>
		</div>
	);
}