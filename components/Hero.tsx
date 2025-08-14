import Link from 'next/link';

export default function Hero() {
	return (
		<section className="relative overflow-hidden pt-16 md:pt-24 pb-20">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-brand-from/30 to-brand-to/20 blur-3xl" />
			</div>
			<div className="container-content text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
					Measure the pulse of your content. <span className="gradient-text">Act in minutes.</span>
				</h1>
				<p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">PulseTrack gives growth teams a live command center for social performance—so you can cut reporting time 60% and find high-converting posts 2× faster.</p>
				<div className="mt-8 flex items-center justify-center gap-3">
					<Link href="/dashboard" className="rounded-md bg-gradient-to-r from-brand-from to-brand-to px-5 py-3 font-semibold shadow-soft hover:shadow-softLg active:scale-[0.98]">Try the demo</Link>
					<Link href="/pricing" className="rounded-md border border-border-strong bg-elev1 px-5 py-3 font-semibold hover:bg-elev2">View pricing</Link>
				</div>
			</div>
		</section>
	);
}