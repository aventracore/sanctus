import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center text-center p-10">
			<div>
				<div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-brand-from/30 to-brand-to/30 animate-pulse" />
				<h1 className="mt-6 text-3xl font-bold">Page not found</h1>
				<p className="text-white/70 mt-2">The page you’re after has moved or never existed.</p>
				<Link href="/" className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">Back home</Link>
			</div>
		</div>
	);
}