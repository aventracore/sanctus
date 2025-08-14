"use client";
import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

export default function AnimatedNumber({ value }: { value: number }) {
	const motion = useMotionValue(0);
	const [text, setText] = useState('0');
	useEffect(() => {
		const unsubscribe = motion.on('change', (latest) => setText(Math.round(latest).toLocaleString()))
		const controls = animate(motion, value, { type: 'spring', stiffness: 120, damping: 20 });
		return () => { controls.stop(); unsubscribe(); };
	}, [value, motion]);
	return <span>{text}</span>;
}