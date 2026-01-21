import { cn } from "@/lib/classUtils";
import useContactFormLogic from "@/hooks/useContactFormLogic";
import { motion } from "framer-motion";
import Field from "./field";
import { field } from "@/animations/components/form";
import { hover } from "@/animations/interaction";
import { list } from "@/animations/list";

function Form() {
	const { handleChange, handleSubmit, sending, form, invalidErrors } = useContactFormLogic();

	return (
		<motion.form onSubmit={handleSubmit} className="space-y-6" variants={list} initial="hidden" animate="visible">
			<Field title="name" onChange={handleChange} value={form.name} errors={invalidErrors}>
				{(props) => <input {...props} className={props.className} type="text" />}
			</Field>

			<Field title="email" onChange={handleChange} value={form.email} errors={invalidErrors}>
				{(props) => <input {...props} className={props.className} type="email" />}
			</Field>

			<Field title="message" onChange={handleChange} value={form.message} errors={invalidErrors}>
				{(props) => <textarea {...props} className={cn(props.className, "resize-none")} rows={6} />}
			</Field>

			<motion.div variants={field}>
				<SubmitBtn sending={sending} />
			</motion.div>
		</motion.form>
	);
}

function SubmitBtn({ sending }: { sending: boolean }) {
	return (
		<motion.button
			type="submit"
			whileHover={hover.whileHover}
			whileTap={hover.whileTap}
			disabled={sending}
			className={cn(
				"w-full px-4 py-3 bg-red-950/50 rounded-lg cursor-pointer",
				"border border-amber-500/30 focus:border-amber-500",
				"focus:outline-none focus:ring-2 focus:ring-amber-500/20",
				"transition-all text-white placeholder-red-300/50",
				sending && "opacity-50 cursor-not-allowed"
			)}
		>
			{sending ? "Sending ..." : "Send message"}
		</motion.button>
	);
}

export default Form;
