"use client";
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false });

export default function ChartCard({ title, data, type = 'line' }: { title: string; data: any[]; type?: 'line' | 'bar' }) {
	const color = useMemo(() => '#38bdf8', []);
	return (
		<div className="card p-4 md:p-6">
			<div className="text-sm text-white/60 mb-2">{title}</div>
			<div style={{ width: '100%', height: 280 }}>
				<ResponsiveContainer>
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