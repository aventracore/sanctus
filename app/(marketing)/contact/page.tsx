"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label, TextInput, Select } from '@/components/FormControls';

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	reason: z.string(),
	message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });
	return (
		<div className="section">
			<div className="container-content max-w-2xl">
				<h1 className="text-3xl font-bold">Contact us</h1>
				{submitted ? (
					<div className="mt-6 card p-6 text-center animate-in fade-in zoom-in">
						<h2 className="text-xl font-semibold">Thanks! We’ll be in touch.</h2>
						<p className="text-white/70">We respond within 2 business days.</p>
					</div>
				) : (
					<form className="mt-6 card p-6 space-y-4" onSubmit={handleSubmit(() => new Promise((res) => setTimeout(() => { setSubmitted(true); res(undefined); }, 800)))} aria-live="polite">
						<div>
							<Label htmlFor="name">Name</Label>
							<TextInput id="name" {...register('name')} aria-invalid={!!errors.name} />
							{errors.name && <p className="text-danger text-sm">Please enter your name.</p>}
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<TextInput id="email" type="email" {...register('email')} aria-invalid={!!errors.email} />
							{errors.email && <p className="text-danger text-sm">Enter a valid email.</p>}
						</div>
						<div>
							<Label htmlFor="reason">Reason</Label>
							<Select id="reason" {...register('reason')}>
								<option>General</option>
								<option>Pricing</option>
								<option>Partnerships</option>
							</Select>
						</div>
						<div>
							<Label htmlFor="message">Message</Label>
							<textarea id="message" rows={5} {...register('message')} className="w-full rounded-md bg-elev2 border border-border-subtle px-3 py-2" />
							{errors.message && <p className="text-danger text-sm">Tell us a bit more so we can help.</p>}
						</div>
						<button disabled={isSubmitting} className="rounded-md bg-gradient-to-r from-brand-from to-brand-to px-4 py-2 font-medium shadow-soft">{isSubmitting ? 'Sending…' : 'Send'}</button>
					</form>
				)}
			</div>
		</div>
	);
}