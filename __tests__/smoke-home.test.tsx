import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('next/navigation', () => ({ usePathname: () => '/' }));

describe('home page', () => {
	it('renders hero headline', () => {
		render(<Home />);
		expect(screen.getByText(/Measure the pulse of your content/i)).toBeInTheDocument();
	});
});