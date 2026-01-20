import { cn } from "@/lib/classUtils";
import useContactFormLogic from "@/hooks/useContactFormLogic";
import type { ChangeEvent } from "react";

const inputStyles = cn(
	"w-full px-4 py-3 bg-red-950/50 rounded-lg",
	"border border-amber-500/30 focus:border-amber-500",
	"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
	"transition-all text-white placeholder-red-300/50"
);

function Form() {
	const { handleChange, handleSubmit, sending, form, invalidErrors } = useContactFormLogic();

	return (
		<form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
			<Field title="name" onChange={handleChange} value={form.name} errors={invalidErrors}>
				{(props) => <input {...props} className={cn(props.className)} type="text" />}
			</Field>

			<Field title="email" onChange={handleChange} value={form.email} errors={invalidErrors}>
				{(props) => <input {...props} className={cn(props.className)} type="email" />}
			</Field>

			<Field title="message" onChange={handleChange} value={form.message} errors={invalidErrors}>
				{(props) => <textarea {...props} className={cn(props.className, "resize-none")} rows={6} />}
			</Field>

			<button
				type="submit"
				className={cn(inputStyles, "hover:scale-[1.02]", sending && "opacity-50 cursor-not-allowed")}
				disabled={sending}
			>
				{sending ? "Sending ..." : "Send message"}
			</button>
		</form>
	);
}

interface FieldProps {
	title: string;
	children: (props: {
		id: string;
		name: string;
		className: string;
		required: boolean;
		placeholder: string;
		onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
		value: string;
	}) => React.ReactElement;
	required?: boolean;
	onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	value: string;
	errors?: { field: string; error: string }[];
}

export function Field({ title, children, required = true, onChange, value, errors = [] }: FieldProps) {
	const hasError = errors.some((e) => e.field === title.toLowerCase());

	return (
		<div className="flex flex-col gap-2">
			<label className={cn("block", hasError ? "text-red-400" : "text-amber-100")} htmlFor={title}>
				{title} {required && <span className="text-red-500">*</span>}
			</label>
			{hasError && (
				<ul className="pl-4 text-xs text-red-400 mt-1 list-disc">
					<li>{errors.find((e) => e.field === title.toLowerCase())?.error}</li>
				</ul>
			)}
			{children({
				id: title.toLowerCase(),
				name: title.toLowerCase(),
				className: cn(inputStyles, hasError && "border-red-500 focus:border-red-500 focus:ring-red-500/20"),
				required: required,
				placeholder: `Please enter your ${title.toLowerCase()}`,
				onChange: onChange,
				value: value,
			})}
		</div>
	);
}

export default Form;
