// @ts-ignore-next-line
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					fontSize: 64,
					color: 'white',
					background: 'linear-gradient(90deg, #0ea5e9, #3b82f6)',
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					letterSpacing: '-0.02em',
					fontWeight: 800,
				}}
			>
				PulseTrack
			</div>
		),
		{ width: size.width, height: size.height }
	);
}