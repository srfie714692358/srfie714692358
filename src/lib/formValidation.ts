export function contactFormValidation(form: { name?: string; email?: string; message?: string }) {
	const errors = [];

	if (!form?.name) {
		errors.push({ field: "name", error: "Name is required." });
	} else if (!/^.{3,}$/.test(form.name)) {
		errors.push({ field: "name", error: "Name must be more than two chars." });
	}

	if (!form?.name) {
		errors.push({ field: "email", error: "Email is required." });
	} else if (!form?.email || !/\S+@\S+\.\S+/.test(form.email)) {
		errors.push({ field: "email", error: "Please enter a valid email." });
	}

	if (!form?.name) {
		errors.push({ field: "message", error: "Message can't be empty." });
	} else if (!form?.message || !/^.{6,}$/.test(form.message)) {
		errors.push({ field: "message", error: "Message should be more than 5 chars." });
	}

	return { valid: errors.length, errors: errors };
}

export default contactFormValidation;
