/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { SocialMedia } from "@/components/SocialMedia";
import { cn } from "@/lib/classUtils";
import { cloneElement, useEffect, useRef, useState, type ChangeEvent, type ReactElement } from "react";
import useEmailjs from "@/hooks/useEmailjs";
import { contactFormValidation } from "@/lib/formValidation";
import { X } from "lucide-react";

const inputStyles = cn(
	"w-full px-4 py-3 bg-red-950/50 rounded-lg",
	"border border-amber-500/30 focus:border-amber-500",
	"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
	"transition-all text-white placeholder-red-300/50"
);

function ContactPage() {
	const [validForm, setValidForm] = useState<{ name: string; email: string; message: string } | null>(null);
	const { sending: _, error, successful } = useEmailjs(validForm);
	const [validErrors, setValidErrors] = useState<{ field: string; error: string }[]>([]);
	const [mesList, setMesList] = useState<{ title: string; messages: string[]; color: "red" | "green" }[]>([]);

	const handleSubmit = (form: { name: string; email: string; message: string }) => {
		const { valid, errors } = contactFormValidation(form);
		if (form && (form.name || form.email || form.message) && valid) {
			setValidErrors(errors);
		} else if (form && form.name && form.email && form.message && !valid) {
			setValidForm(form);
		}
	};

	useEffect(() => {
		if (validErrors.length) {
			setMesList((s) => [
				...s.slice(-1),
				{ title: "Error", messages: [...validErrors.map((err) => err.error)], color: "red" },
			]);
		} else if (error && error !== "Invalid inputs.") {
			setMesList((s) => [...s.slice(-1), { title: "Error", messages: [error], color: "red" }]);
		} else if (successful) {
			setMesList((s) => [
				...s.slice(-1),
				{ title: "Message", messages: ["Thank you for your message! I will get back to you soon."], color: "green" },
			]);
		}
	}, [validErrors, error, successful]);

	return (
		<div className="container mx-auto px-4">
			<div className="fixed top-24 right-4 w-100">
				{mesList.map((mesDetail, ind) => (
					<div
						key={ind}
						style={{ scale: 1 - ((mesList.length - ind) / 100) * 5, transform: `translateY(-${ind * 70}px)` }}
					>
						<Message {...mesDetail} />
					</div>
				))}
			</div>
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">Get in Touch</h1>

			<div className="max-w-2xl mx-auto">
				<div className="bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
					<Form onSubmit={handleSubmit} />
					<SocialMedia />
				</div>
			</div>
		</div>
	);
}

function Form({ onSubmit }: { onSubmit: (form: { name: string; email: string; message: string }) => void }) {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onSubmit(form);
	};
	return (
		<>
			<form onSubmit={handleSubmit} ref={formRef} id="contact-form" className="space-y-6">
				<Input title="name">
					<input type="text" placeholder="Enter your name" onChange={handleChange} />
				</Input>
				<Input title="email">
					<input type="email" placeholder="Enter your email" onChange={handleChange} />
				</Input>
				<Input title="message">
					<textarea rows={6} className="resize-none" onChange={handleChange} placeholder="Enter your message" />
				</Input>
				<button type="submit" className={cn(inputStyles, "hover:scale-[1.02] border")}>
					"Send message"
				</button>
			</form>
		</>
	);
}

function Input({ title, children, ...props }: { title: string; children?: ReactElement }) {
	const newProps = { id: title, name: title, required: true, className: inputStyles, ...props };
	return (
		<div>
			<label className="block text-amber-100 mb-2" htmlFor="name">
				{title} <span className="text-red-500">*</span>
			</label>
			{children && cloneElement(children, newProps)}
		</div>
	);
}

function Message({ title, messages, color }: { title: string; messages: string[]; color: "red" | "green" }) {
	const [hidden, setHidden] = useState(false);
	const baseStyles = "p-4 rounded-lg shadow-lg z-50 max-w-100";
	const redStyles = "bg-red-950/95 text-red-400 border border-red-500";
	const greenStyles = "bg-green-950/95 text-green-400 border border-green-500";

	useEffect(() => {
		const id = setTimeout(() => setHidden(true), 5000);
		return () => {
			clearTimeout(id);
			setHidden(false);
		};
	}, [title, messages, color]);

	return (
		<div className={cn(baseStyles, color == "red" ? redStyles : greenStyles, hidden && "hidden")}>
			<div className="flex justify-between">
				<h6 className="font-semibold text-lg">{title}:</h6>
				<X className="cursor-pointer" onClick={() => setHidden(true)} />
			</div>
			<ul className="list-disc pl-8 text-sm">
				{messages.map((mes, ind) => (
					<li key={ind}>
						<p>{mes}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ContactPage;
