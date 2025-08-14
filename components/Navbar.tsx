"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/features', label: 'Features' },
	{ href: '/pricing', label: 'Pricing' },
	{ href: '/customers', label: 'Customers' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

const MPill: any = (motion as any).div;
const MDiv: any = (motion as any).div;

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
			if (e.key === 'Tab' && panelRef.current) {
				const focusables = panelRef.current.querySelectorAll<HTMLElement>('a,button,select,input,textarea,[tabindex]:not([tabindex="-1"])');
				const first = focusables[0];
				const last = focusables[focusables.length - 1];
				if (!first || !last) return;
				const active = document.activeElement as HTMLElement | null;
				if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
				if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
			}
		};
		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const first = panelRef.current?.querySelector<HTMLElement>('a,button,select,input,textarea,[tabindex]:not([tabindex="-1"])');
		first?.focus();
	}, [open]);

	useEffect(() => {
		// Lock body scroll when menu is open
		if (open) {
			document.body.style.overflow = 'hidden';
			return () => { document.body.style.overflow = ''; };
		}
	}, [open]);

	return (
		<header className={`sticky top-0 z-[90] transition-all ${scrolled ? 'backdrop-blur-lg bg-[rgba(10,16,32,0.55)] border-b border-border-subtle' : 'backdrop-blur-md bg-[rgba(10,16,32,0.35)]'}`}>
			<div className="container-content flex items-center justify-between h-[64px] md:h-[72px]">
				<Link href="/" className="flex items-center gap-2" aria-label="PulseTrack home">
					<Logo className="h-6 w-auto" />
				</Link>
				<nav className="hidden md:flex items-center gap-6" aria-label="Main">
					{navItems.map((item) => (
						<Link key={item.href} href={item.href} className={`relative text-sm hover:text-white transition-colors ${pathname === item.href ? 'text-white' : 'text-white/80'}`}>
							{item.label}
							{pathname === item.href && (
								<MPill layoutId="active-pill" className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-gradient-to-r from-brand-from to-brand-to rounded-full" />
							)}
						</Link>
					))}
					<Link href="/dashboard" className="ml-4 inline-flex items-center rounded-md bg-gradient-to-r from-brand-from to-brand-to px-3 py-2 text-sm font-medium shadow-soft hover:shadow-softLg active:scale-[0.98] transition">Try Demo</Link>
				</nav>
				<button aria-label="Open menu" className="md:hidden p-3 rounded-md bg-elev1 border border-border-subtle" onClick={() => setOpen(true)}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
				</button>
			</div>
			{open && (
				<div role="dialog" aria-modal="true" aria-label="Mobile menu" className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
					<MDiv
						ref={panelRef as any}
						initial={{ x: 320, opacity: 1 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 320, opacity: 1 }}
						transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
						className="absolute right-0 top-0 h-full w-80 bg-elev1/95 border-l border-border-subtle p-6 flex flex-col gap-4 shadow-softLg"
						onClick={(e: any) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between">
							<Logo className="h-6" />
							<button aria-label="Close menu" className="p-2 rounded-md bg-elev2" onClick={() => setOpen(false)}>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
							</button>
						</div>
						<nav className="flex flex-col gap-2 mt-2">
							{navItems.map((item) => (
								<Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`block px-3 py-3 rounded-md hover:bg-elev2 ${pathname === item.href ? 'bg-elev2' : ''}`}>{item.label}</Link>
							))}
							<Link href="/dashboard" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-3 font-medium shadow-soft" onClick={() => setOpen(false)}>Try Demo</Link>
						</nav>
					</MDiv>
				</div>
			)}
		</header>
	);
}