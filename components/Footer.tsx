"use client";
import Link from 'next/link';
import ModalSubscribe from './ModalSubscribe';
import { useState } from 'react';

export default function Footer() {
	const [open, setOpen] = useState(false);
	return (
		<footer className="mt-24 border-t border-border-subtle bg-elev1">
			<div className="container-content py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
				<div className="col-span-2">
					<h4 className="text-sm font-semibold text-white/70 mb-3">PulseTrack</h4>
					<p className="text-white/70 max-w-md">Live social analytics, crafted like a design tool. Cut reporting time 60% and find high-converting content 2× faster.</p>
					<button onClick={() => setOpen(true)} className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 text-sm font-medium shadow-soft">Subscribe to updates</button>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-white/70 mb-3">Product</h4>
					<ul className="space-y-2 text-white/80">
						<li><Link href="/features">Features</Link></li>
						<li><Link href="/pricing">Pricing</Link></li>
						<li><Link href="/customers">Customers</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-white/70 mb-3">Company</h4>
					<ul className="space-y-2 text-white/80">
						<li><Link href="/about">About</Link></li>
						<li><Link href="/blog">Blog</Link></li>
						<li><Link href="/contact">Contact</Link></li>
						<li><Link href="/privacy">Privacy</Link></li>
						<li><Link href="/terms">Terms</Link></li>
					</ul>
				</div>
			</div>
			<div className="container-content py-6 border-t border-border-subtle text-white/60 text-sm flex items-center justify-between">
				<p>© {new Date().getFullYear()} PulseTrack</p>
				<p>Made with care for performance and accessibility</p>
			</div>
			<ModalSubscribe open={open} onClose={() => setOpen(false)} />
		</footer>
	);
}