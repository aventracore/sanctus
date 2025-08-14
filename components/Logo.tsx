import * as React from 'react';

export default function Logo({ className = 'h-6 w-auto' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PulseTrack">
			<defs>
				<linearGradient id="pt-g" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#0ea5e9" />
					<stop offset="100%" stopColor="#3b82f6" />
				</linearGradient>
			</defs>
			<path d="M8 28c8 0 8-12 16-12s8 12 16 12 8-12 16-12 8 12 16 12" stroke="url(#pt-g)" strokeWidth="3" strokeLinecap="round" />
			<text x="88" y="32" fontFamily="Inter, ui-sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.02em" fill="currentColor">PulseTrack</text>
		</svg>
	);
}