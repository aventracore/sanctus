import { forwardRef } from 'react';
import { focusRing } from '@/lib/a11y';

export const TextInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function TextInput(props, ref) {
	return <input ref={ref} {...props} className={`rounded-md bg-elev2 border border-border-subtle px-3 py-2 ${focusRing} ${props.className || ''}`} />;
});

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(function Select(props, ref) {
	return <select ref={ref} {...props} className={`rounded-md bg-elev2 border border-border-subtle px-3 py-2 ${focusRing} ${props.className || ''}`} />;
});

export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
	<label {...props} className={`block text-sm text-white/80 mb-1 ${props.className || ''}`} />
);