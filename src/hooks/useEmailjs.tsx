/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactFormValidation } from "@/lib/formValidation";

export function useEmailjs(form: { name: string; email: string; message: string } | null) {
	const [sending, setSending] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [successful, setSuccessful] = useState<boolean | null>(null);

	useEffect(() => {
		if (!form || contactFormValidation(form).valid) {
			setError("Invalid inputs.");
			return;
		}

		setSending(true);
		emailjs.init("jBShjXtt-koYWwBjd");
		emailjs
			.send("service_8c2ad4i", "template_7nu460c", {
				from_name: form.name,
				to_name: "Sajjad",
				from_email: form.email,
				to_email: "srfie7146@gmail.com",
				message: form.message,
			})
			.then(() => setSuccessful(true))
			.catch((err) => setError(err))
			.finally(() => setSending(false));
	}, [form]);

	return { sending, error, successful };
}

export default useEmailjs;
