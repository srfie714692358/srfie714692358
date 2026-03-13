import { SocialMedia } from "@/components/feature/socialMedia";
import Form from "@/components/feature/contactForm";
import { cn } from "@/shared/utils/cn";

function ContactPage() {
	const formContainerStyle = cn(
		"max-w-2xl mx-auto p-8 rounded-2xl",
		"card-shadow bg-(--color-bg-surface)",
		"border border-(--color-border-default)",
	);
	return (
		<div className="container mx-auto px-4">
			<h1 className="page-title text-center">Get in Touch</h1>
			<div className={formContainerStyle}>
				<Form />
				<SocialMedia />
			</div>
		</div>
	);
}

export default ContactPage;
