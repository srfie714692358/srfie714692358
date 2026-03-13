import type { ValidationRule, ValidationError } from "@/shared/types/validation";

export function validateForm<T extends Record<string, string>>(
	form: Partial<T> | undefined,
	rules?: ValidationRule[],
) {
	const invalidErrors: ValidationError = {};
	const activeRules: ValidationRule[] = rules || generateRules(form);

	activeRules.forEach(({ field, required, minLength, pattern, messages }) => {
		const value = form?.[field];
		const errors: string[] = [];

		if (required && !value) {
			errors.push(messages.required || "This field is required.");
		}
		if (minLength && value && value.length < minLength) {
			errors.push(messages.min || `Minimum length is ${minLength}.`);
		}
		if (pattern && value && !pattern.test(value)) {
			errors.push(messages.invalid || "Invalid format.");
		}
		if (errors.length) {
			invalidErrors[field] = errors;
		}
	});

	return {
		isValid: Object.keys(invalidErrors).length === 0,
		invalidErrors,
	};
}

function generateRules<T extends Record<string, string>>(form: Partial<T> | undefined) {
	const rules = Object.keys(form || {}).map((key) => ({
		field: key,
		required: true,
		messages: { required: `${key} is required.` },
	}));
	return rules || [];
}

export default validateForm;
