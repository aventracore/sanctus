export const theme = {
	colors: {
		brandFrom: '#0ea5e9',
		brandTo: '#3b82f6',
		surfaceLight: '#0b1020',
		elev1Light: '#111529',
		elev2Light: '#151a33',
		textLight: '#e6eef9',
		borderSubtleLight: 'rgba(255,255,255,0.08)',
		borderStrongLight: 'rgba(255,255,255,0.18)',
		surfaceDark: '#f7f9fc',
		elev1Dark: '#ffffff',
		elev2Dark: '#f2f4f7',
		textDark: '#0b1220',
		borderSubtleDark: 'rgba(0,0,0,0.08)',
		borderStrongDark: 'rgba(0,0,0,0.16)',
		success: '#22c55e',
		warning: '#f59e0b',
		danger: '#ef4444',
	},
	typography: {
		fluid: {
			// clamp(min, vw, max)
			h1: 'clamp(2.2rem, 2.8vw, 3.5rem)',
			h2: 'clamp(1.8rem, 2.2vw, 2.6rem)',
			h3: 'clamp(1.4rem, 1.6vw, 1.8rem)',
			body: 'clamp(1rem, 1.1vw, 1.125rem)'
		},
		tracking: {
			tight: '-0.02em',
			normal: '-0.005em'
		}
	},
	radii: {
		xs: '6px',
		sm: '8px',
		md: '12px',
		lg: '16px',
		xxl: '24px',
	},
	shadows: {
		soft: '0 10px 30px rgba(0,0,0,0.08)',
		softLg: '0 20px 60px rgba(0,0,0,0.12)'
	},
	motion: {
		page: {
			duration: 0.55,
			ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
		},
		stagger: 0.08,
	},
};

export const injectCssVariables = () => {
	if (typeof document === 'undefined') return;
	const root = document.documentElement;
	root.style.setProperty('--brand-from', theme.colors.brandFrom);
	root.style.setProperty('--brand-to', theme.colors.brandTo);
	root.style.setProperty('--brand', `linear-gradient(90deg, ${theme.colors.brandFrom}, ${theme.colors.brandTo})`);
	root.style.setProperty('--success', theme.colors.success);
	root.style.setProperty('--warning', theme.colors.warning);
	root.style.setProperty('--danger', theme.colors.danger);
};