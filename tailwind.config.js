/**************** Tailwind Config ****************/
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{ts,tsx,mdx}',
		'./components/**/*.{ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: 'var(--brand)',
					from: 'var(--brand-from)',
					to: 'var(--brand-to)'
				},
				surface: 'var(--surface)',
				elev1: 'var(--elev1)',
				elev2: 'var(--elev2)',
				border: {
					subtle: 'var(--border-subtle)',
					strong: 'var(--border-strong)'
				},
				text: 'var(--text)',
				success: 'var(--success)',
				warning: 'var(--warning)',
				danger: 'var(--danger)'
			},
			fontFamily: {
				sans: ['var(--font-inter)']
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1.25rem',
					lg: '2rem',
					xl: '2rem',
					'2xl': '2.5rem'
				},
			},
			maxWidth: {
				'content': '1440px'
			},
			boxShadow: {
				soft: '0 10px 30px rgba(0,0,0,0.08)',
				softLg: '0 20px 60px rgba(0,0,0,0.12)'
			},
			backdropBlur: {
				md: '8px',
				lg: '16px'
			},
			borderRadius: {
				xs: '6px',
				sm: '8px',
				md: '12px',
				lg: '16px',
				'2xl': '24px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};