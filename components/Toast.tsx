"use client";
import { useEffect } from 'react';

export default function Toast({ open, message, onClose }: { open: boolean; message: string; onClose: () => void }) {
	useEffect(() => {
		if (!open) return;
		const id = setTimeout(onClose, 2200);
		return () => clearTimeout(id);
	}, [open, onClose]);
	if (!open) return null;
	return (
		<div className="fixed bottom-4 right-4 rounded-md bg-elev1 border border-border-subtle px-4 py-2 shadow-soft">{message}</div>
	);
}