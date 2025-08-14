import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	}),
});

class IO {
	constructor() {}
	observe() {}
	unobserve() {}
	disconnect() {}
}
// @ts-ignore
global.IntersectionObserver = IO as any;

class RO {
	constructor(cb: any) {}
	observe() {}
	unobserve() {}
	disconnect() {}
}
// @ts-ignore
window.ResizeObserver = RO as any;