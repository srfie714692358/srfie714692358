import type { EmailData } from "./sendEmail";

export type ValidationErrorT = {
	field: string;
	error: string;
};

export function contactFormValidation(form: EmailData | null) {
	const errors: ValidationErrorT[] = [];

	if (!form) {
		errors.push({ field: "form", error: "Inputs are empty." });
	}

	if (!form?.name) {
		errors.push({ field: "name", error: "Name is required." });
	} else if (!/^.{3,}$/.test(form.name)) {
		errors.push({ field: "name", error: "Name must be more than two chars." });
	}

	if (!form?.email) {
		errors.push({ field: "email", error: "Email is required." });
	} else if (!form?.email || !/\S+@\S+\.\S+/.test(form.email)) {
		errors.push({ field: "email", error: "Please enter a valid email." });
	}

	if (!form?.message) {
		errors.push({ field: "message", error: "Message can't be empty." });
	} else if (!form?.message || !/^.{6,}$/.test(form.message)) {
		errors.push({ field: "message", error: "Message should be more than 5 chars." });
	}

	return { isValid: errors.length == 0, errors: errors };
}

export default contactFormValidation;
