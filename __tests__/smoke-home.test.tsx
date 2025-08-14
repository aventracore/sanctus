import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('next/navigation', () => ({ usePathname: () => '/' }));

describe('home page', () => {
	it('renders hero headline', async () => {
		await act(async () => {
			render(React.createElement(Home));
		});
		expect(screen.getByText(/Measure the pulse of your content/i)).toBeInTheDocument();
	});
});