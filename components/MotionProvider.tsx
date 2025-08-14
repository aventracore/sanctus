"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { theme } from '@/lib/theme';
import React from 'react';

export default function MotionProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
				animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
				exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
				transition={{ duration: theme.motion.page.duration, ease: theme.motion.page.ease }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}