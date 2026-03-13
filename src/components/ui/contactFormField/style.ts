import { cn } from "@/shared/utils/cn";

export const fieldStyles = {
	container: (error?: boolean) => cn(error && "text-(--color-text-error)", "flex flex-col gap-2"),
	field: (error?: boolean) =>
		cn(
			"w-full px-4 py-3 rounded-lg",
			"border border-(--color-border-soft) focus:border-(--color-border-soft)",
			"focus:outline-none autofill-reset",
			"transition-all text-secondary placeholder-(--color-text-muted)",
			"bg-(--color-bg-field) hover:bg-(--color-bg-field-hover) focus:bg-(--color-bg-field-focus)",
			error && "border-red-500 focus:ring-red-500",
		),
	error: "pl-4 text-xs text-(--color-text-error) list-disc",
};
