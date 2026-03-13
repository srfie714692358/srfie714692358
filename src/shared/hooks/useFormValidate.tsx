import { useState, useCallback, useRef } from "react";
import { validateForm } from "@/shared/utils/validateForm";
import type { ValidationError, ValidationRule } from "@/shared/types/validation";

export function useFormValidate<T extends Record<string, string>>(form: Partial<T>, rules: ValidationRule[]) {
	const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
	const currentErrorsRef = useRef<ValidationError>({});

	const validate = useCallback((): boolean => {
		const { isValid, invalidErrors: errors } = validateForm(form, rules);
		currentErrorsRef.current = errors;
		const newFieldErrors: Record<string, boolean> = {};
		for (const field in errors) {
			newFieldErrors[field] = true;
		}
		setFieldErrors(newFieldErrors);
		return isValid;
	}, [form, rules]);

	const getError = useCallback((fieldName: keyof typeof fieldErrors): string[] => {
		return currentErrorsRef.current[fieldName as string] || [];
	}, []);

	return { fieldErrors, validate, getError };
}

export default useFormValidate;
