import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page';

jest.mock('next/navigation', () => ({ usePathname: () => '/dashboard' }));

jest.mock('recharts', () => {
	return {
		ResponsiveContainer: ({ children }: any) => React.createElement('div', null, children),
		LineChart: ({ children }: any) => React.createElement('div', null, children),
		Line: () => React.createElement('div'),
		CartesianGrid: () => React.createElement('div'),
		XAxis: () => React.createElement('div'),
		YAxis: () => React.createElement('div'),
		Tooltip: () => React.createElement('div'),
		BarChart: ({ children }: any) => React.createElement('div', null, children),
		Bar: () => React.createElement('div'),
	};
});

describe('dashboard page', () => {
	it('renders KPI cards and a chart section', async () => {
		Storage.prototype.getItem = jest.fn().mockImplementation((key) => (key === 'pt_demo_authed' ? 'true' : null));
		await act(async () => {
			render(React.createElement(Dashboard));
		});
		expect(screen.getByText(/Followers/i)).toBeInTheDocument();
		expect(screen.getByText(/Engagement \(24h\)/i)).toBeInTheDocument();
	});
});