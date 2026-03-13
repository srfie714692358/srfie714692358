import { useState, useCallback } from "react";

export function useFormState<T extends Partial<Record<string, string>>>(initialState?: T) {
	const [form, setForm] = useState<T>(initialState || ({} as T));

	const setFormState = useCallback((newState: Partial<T> | ((prev: Partial<T>) => Partial<T>)) => {
		setForm((prev) => {
			if (typeof newState === "function") {
				const partialResult = (newState as (prev: Partial<T>) => Partial<T>)(prev);
				return { ...prev, ...partialResult };
			}
			return { ...prev, ...newState };
		});
	}, []);

	return {
		form,
		setForm: setFormState,
	};
}
