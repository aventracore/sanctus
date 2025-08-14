/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/$1',
		'^next/image$': '<rootDir>/test/__mocks__/next-image.tsx',
	},
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
				diagnostics: false
			}
		]
	},
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: false
};