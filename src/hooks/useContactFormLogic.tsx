import { useState, type ChangeEvent } from "react";
import contactFormValidation, { type ValidationErrorT } from "@/lib/formValidation";
import useUpdateMsg from "./useUpdateMsg";
import sendEmail, { type EmailData } from "@/lib/sendEmail";

type FetchStatesT = {
	sending: boolean;
	error: string | null;
	success: boolean;
	invalid: ValidationErrorT[];
};

function useContactFormLogic() {
	const [form, setForm] = useState<EmailData>({ name: "", email: "", message: "" });
	const [fetchStates, setFetchStates] = useState<FetchStatesT>({ sending: false, error: null, success: false, invalid: [] });

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value } as EmailData));
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setFetchStates((prev) => ({ ...prev, error: null, success: false, invalid: [] }));
		const { isValid, errors } = contactFormValidation(form);
		if (!isValid) {
			setFetchStates((prev) => ({ ...prev, invalid: errors }));
		} else {
			setFetchStates((prev) => ({ ...prev, sending: true }));
			sendEmail(form)
				.then(() => {
					setFetchStates((prev) => ({ ...prev, success: true }));
					setForm({ name: "", email: "", message: "" });
				})
				.catch((err) => {
					setFetchStates((prev) => ({ ...prev, error: err.text || err.message || "Failed to send email" }));
				})
				.finally(() => {
					setFetchStates((prev) => ({ ...prev, sending: false }));
				});
		}
	};

	useUpdateMsg(fetchStates.invalid, fetchStates.error, fetchStates.success);
	return { handleChange, handleSubmit, sending: fetchStates.sending, form, invalidErrors: fetchStates.invalid };
}

export default useContactFormLogic;
