export const metadata = { title: 'Terms' };

export default function TermsPage() {
	return (
		<div className="section">
			<div className="container-content prose prose-invert max-w-3xl">
				<h1>Terms of Service</h1>
				<p>By using PulseTrack, you agree to these terms.</p>
				<h2>Accounts</h2>
				<p>You are responsible for your account and for maintaining the confidentiality of your credentials.</p>
				<h2>Acceptable use</h2>
				<p>Do not misuse the service or attempt to access it using a method other than the interface and instructions we provide.</p>
				<h2>Liability</h2>
				<p>PulseTrack is provided “as is” without warranties. We are not liable for lost profits or revenues.</p>
				<h2>Termination</h2>
				<p>We may suspend or terminate your access if you violate these terms.</p>
			</div>
		</div>
	);
}