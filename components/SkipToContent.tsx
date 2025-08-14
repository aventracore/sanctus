import { skipToContentId } from '@/lib/a11y';

export function SkipToContent() {
	return (
		<a
			href={`#${skipToContentId}`}
			className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 px-4 py-2 rounded-md bg-elev1 border border-border-strong shadow-soft text-text"
		>
			Skip to content
		</a>
	);
}