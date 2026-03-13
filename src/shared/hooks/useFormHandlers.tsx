import { useCallback } from "react";
import type { ChangeEvent } from "react";

export function useFormHandlers<T extends Partial<Record<string, string>>>(
	setForm: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setForm((prev) => ({ ...prev, [name]: value }));
		},
		[setForm],
	);

	const clearForm = useCallback(() => {
		setForm({} as Partial<T>);
	}, [setForm]);

	return {
		handleChange,
		clearForm,
	};
}
