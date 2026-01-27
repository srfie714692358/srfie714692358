import { cn } from "@/lib/classUtils";
import { AnimatePresence, motion } from "framer-motion";
import { error, field } from "@/animations/components/form";
import type { ChangeEvent } from "react";

const fieldStyles = cn(
	"w-full px-4 py-3 bg-red-950/50 rounded-lg",
	"border border-amber-500/30 focus:border-amber-500",
	"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
	"transition-all text-white placeholder-red-300/50"
);

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

function Field({ title, children, required = true, onChange, value, errors = [] }: FieldProps) {
	const hasError = errors.some((e) => e.field === title.toLowerCase());

	return (
		<motion.div variants={field} className="flex flex-col gap-2">
			<label className={cn(hasError ? "text-red-400" : "text-amber-100")}>
				{title} {required && <span className="text-red-500">*</span>}
			</label>

			<AnimatePresence>
				{hasError && (
					<motion.ul
						variants={error}
						initial="initial"
						animate="animate"
						exit="exit"
						className="pl-4 text-xs text-red-400 list-disc"
					>
						<li>{errors.find((e) => e.field === title.toLowerCase())?.error}</li>
					</motion.ul>
				)}
			</AnimatePresence>

			{children({
				id: title.toLowerCase(),
				name: title.toLowerCase(),
				className: cn(fieldStyles, hasError && "border-red-500 focus:ring-red-500/20"),
				required,
				placeholder: `Please enter your ${title.toLowerCase()}`,
				onChange,
				value,
			})}
		</motion.div>
	);
}

export default Field;
