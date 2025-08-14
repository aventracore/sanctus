"use client";
import { useEffect, useRef } from 'react';
import { focusRing } from '@/lib/a11y';

export default function ModalSubscribe({ open, onClose }: { open: boolean; onClose: () => void }) {
	const dialogRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!open) return;
		const first = dialogRef.current?.querySelector<HTMLElement>('input,button');
		first?.focus();
		const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, [open, onClose]);

	if (!open) return null;
	return (
		<div role="dialog" aria-modal="true" aria-label="Subscribe" className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
			<div ref={dialogRef} className="w-full max-w-md rounded-lg bg-elev1 border border-border-strong p-6" onClick={(e) => e.stopPropagation()}>
				<h3 className="text-xl font-semibold mb-2">Get product updates</h3>
				<p className="text-white/70 mb-4">One thoughtful email per month. No spam, unsubscribe anytime.</p>
				<form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="flex gap-2">
					<input type="email" required placeholder="you@company.com" className={`flex-1 rounded-md bg-elev2 border border-border-subtle px-3 py-2 ${focusRing}`} aria-label="Email address" />
					<button className="rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">Subscribe</button>
				</form>
			</div>
		</div>
	);
}