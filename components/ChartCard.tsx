"use client";
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ResponsiveContainer: any = dynamic(() => import('recharts').then(m => ({ default: m.ResponsiveContainer } as any)), { ssr: false }) as any;
const LineChart: any = dynamic(() => import('recharts').then(m => ({ default: m.LineChart } as any)), { ssr: false }) as any;
const Line: any = dynamic(() => import('recharts').then(m => ({ default: m.Line } as any)), { ssr: false }) as any;
const CartesianGrid: any = dynamic(() => import('recharts').then(m => ({ default: m.CartesianGrid } as any)), { ssr: false }) as any;
const XAxis: any = dynamic(() => import('recharts').then(m => ({ default: m.XAxis } as any)), { ssr: false }) as any;
const YAxis: any = dynamic(() => import('recharts').then(m => ({ default: m.YAxis } as any)), { ssr: false }) as any;
const Tooltip: any = dynamic(() => import('recharts').then(m => ({ default: m.Tooltip } as any)), { ssr: false }) as any;
const BarChart: any = dynamic(() => import('recharts').then(m => ({ default: m.BarChart } as any)), { ssr: false }) as any;
const Bar: any = dynamic(() => import('recharts').then(m => ({ default: m.Bar } as any)), { ssr: false }) as any;

export default function ChartCard({ title, data, type = 'line' }: { title: string; data: any[]; type?: 'line' | 'bar' }) {
	const color = useMemo(() => '#38bdf8', []);
	return (
		<div className="card p-4 md:p-6">
			<div className="text-sm text-white/60 mb-2">{title}</div>
			<div style={{ width: '100%', height: 280 }}>
				<ResponsiveContainer width="100%" height="100%">
					{type === 'line' ? (
						<LineChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
							<XAxis dataKey="label" stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 12 }} />
							<YAxis stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 12 }} />
							<Tooltip contentStyle={{ background: '#111529', border: '1px solid rgba(255,255,255,0.12)' }} />
							<Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
						</LineChart>
					) : (
						<BarChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
							<XAxis dataKey="label" stroke="rgba(0,0,0,0.6)" tick={{ fontSize: 12 }} />
							<YAxis stroke="rgba(0,0,0,0.6)" tick={{ fontSize: 12 }} />
							<Tooltip />
							<Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
						</BarChart>
					)}
				</ResponsiveContainer>
			</div>
		</div>
	);
}