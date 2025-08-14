export const metadata = { title: 'Privacy' };

export default function PrivacyPage() {
	return (
		<div className="section">
			<div className="container-content prose prose-invert max-w-3xl">
				<h1>Privacy Policy</h1>
				<p>PulseTrack respects your data. We collect the minimum necessary to provide our service and never sell your personal information.</p>
				<h2>Data we collect</h2>
				<ul>
					<li>Account info (name, email)</li>
					<li>OAuth tokens for connected social accounts (scoped to read-only)</li>
					<li>Product usage metrics for improving the product</li>
				</ul>
				<h2>Security</h2>
				<p>We encrypt data at rest and in transit. Access is restricted via least-privilege. Audit logs are maintained for all sensitive actions.</p>
				<h2>Your rights</h2>
				<p>Email support@pulsetrack.app to request export or deletion of your data. We respond within 30 days.</p>
			</div>
		</div>
	);
}