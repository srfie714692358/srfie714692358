import { MotionBtn, MotionDiv, MotionForm } from "@/components/provider";
import { fieldVariants } from "@/shared/motion/feature/form";
import Field from "@/components/ui/contactFormField";
import { useState } from "react";

import { useFormHandlers, useFormState, useMessage, useFormValidate } from "@/shared/hooks";
import sendEmail from "@/shared/lib/sendEmail";
import { cn } from "@/shared/utils/cn";

import { CONTACT_FORM_RULES } from "@/shared/constants/formRules";
import type { EmailData } from "@/shared/types/sendEmail";
import { formStyles as styles } from "./style";
import { list } from "@/shared/motion/list";
import { formMotions } from "./motion";

function Form() {
	const { form, setForm } = useFormState<EmailData>({ name: "", email: "", message: "" });
	const { handleChange: onChange, clearForm } = useFormHandlers<EmailData>(setForm);
	const { fieldErrors, validate, getError } = useFormValidate<EmailData>(form, CONTACT_FORM_RULES);

	const [sending, setSending] = useState<boolean>(false);
	const { success, error, info } = useMessage();

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const isValid = validate();
		if (!isValid) {
			const msgs: string[] = [];
			Object.keys(form).forEach((fieldName) => msgs.push(...getError(fieldName)));
			info("Validation Failed", msgs);
			return;
		}
		setSending(true);
		sendEmail(form)
			.then(() => {
				success("Success", ["Thank you! I will get back to you soon."]);
				clearForm();
			})
			.catch(() => error("Failed", ["Failed to send email."]))
			.finally(() => setSending(false));
	};

	return (
		<MotionForm onSubmit={handleSubmit} className="space-y-6" v={list}>
			<Field title="name" onChange={onChange} value={form.name} hasError={fieldErrors["name"]}>
				{(props) => <input {...props} type="text" />}
			</Field>

			<Field title="email" onChange={onChange} value={form.email} hasError={fieldErrors["email"]}>
				{(props) => <input {...props} type="email" />}
			</Field>

			<Field title="message" onChange={onChange} value={form.message} hasError={fieldErrors["message"]}>
				{(props) => <textarea {...props} className={cn(props.className, "resize-none")} rows={6} />}
			</Field>

			<MotionDiv v={fieldVariants} useDefault>
				<SubmitBtn sending={sending} />
			</MotionDiv>
		</MotionForm>
	);
}

function SubmitBtn({ sending }: { sending: boolean }) {
	return (
		<MotionBtn type="submit" {...formMotions.btn} disabled={sending} className={styles.btn(sending)}>
			{sending ? "Sending ..." : "Send message"}
		</MotionBtn>
	);
}

export default Form;
