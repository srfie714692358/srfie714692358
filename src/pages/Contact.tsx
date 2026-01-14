import { SocialMedia } from "@/components/SocialMedia";
import { cn } from "@/lib/ClassUtils";
import { cloneElement, type ReactElement } from "react";

function ContactPage() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">Get in Touch</h1>

			<div className="max-w-2xl mx-auto">
				<div className="bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
					<Form />
					<SocialMedia />
				</div>
			</div>
		</div>
	);
}

function Form() {
	const inputStyles = cn(
		"w-full px-4 py-3 bg-red-950/50 rounded-lg",
		"border border-amber-500/30 focus:border-amber-500",
		"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
		"transition-all text-white placeholder-red-300/50"
	);
	return (
		<form id="contact-form" className="space-y-6">
			<Input title="Name">
				<input type="text" placeholder="Enter your name" />
			</Input>
			<Input title="Email">
				<input type="email" placeholder="Enter your email" />
			</Input>
			<Input title="Message">
				<textarea rows={6} className="resize-none" placeholder="Enter your message (minimum 10 characters)"></textarea>
			</Input>
			<button type="submit" className={cn(inputStyles, "hover:scale-[1.02] border")}>
				Send Message
			</button>
		</form>
	);
}

function Input({ title, children, ...props }: { title: string; children?: ReactElement }) {
	const inputStyles = cn(
		"w-full px-4 py-3 bg-red-950/50 rounded-lg",
		"border border-amber-500/30 focus:border-amber-500",
		"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
		"transition-all text-white placeholder-red-300/50"
	);
	const newProps = { id: title, required: true, className: inputStyles, ...props };
	return (
		<div>
			<label className="block text-amber-100 mb-2" htmlFor="name">
				{title} <span className="text-red-500">*</span>
			</label>
			{children && cloneElement(children, newProps)}
		</div>
	);
}

export default ContactPage;
