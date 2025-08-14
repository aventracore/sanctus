import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page';

jest.mock('next/navigation', () => ({ usePathname: () => '/dashboard' }));

// Mock dynamic recharts import by returning a simple div
jest.mock('recharts', () => ({ ResponsiveContainer: ({ children }: any) => <div data-testid="chart">{children}</div>, LineChart: ({ children }: any) => <div>{children}</div>, Line: () => <div />, CartesianGrid: () => <div />, XAxis: () => <div />, YAxis: () => <div />, Tooltip: () => <div />, BarChart: ({ children }: any) => <div>{children}</div>, Bar: () => <div /> }));

describe('dashboard page', () => {
	it('renders KPI cards and a chart', () => {
		// Simulate authed localStorage
		Storage.prototype.getItem = jest.fn().mockImplementation((key) => (key === 'pt_demo_authed' ? 'true' : null));
		render(<Dashboard />);
		expect(screen.getByText(/Followers/i)).toBeInTheDocument();
		expect(screen.getByTestId('chart')).toBeInTheDocument();
	});
});