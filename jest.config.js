/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/$1',
		'^next/image$': '<rootDir>/test/__mocks__/next-image.tsx',
	},
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				isolatedModules: true,
				tsconfig: { jsx: 'react-jsx', module: 'commonjs', esModuleInterop: true, allowJs: true },
				diagnostics: false,
			}
		]
	},
	transformIgnorePatterns: ['/node_modules/(?!.*)'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: false
};