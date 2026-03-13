import { cn } from "@/shared/utils/cn";

export const formStyles = {
	btn: (disable: boolean) =>
		cn(
			"w-full px-4 py-3 bg-(--color-bg-button) hover:bg-(--color-bg-button-hover) active:bg-(--color-bg-button-active) rounded-lg cursor-pointer",
			"border border-(--color-border-default)",
			disable && "opacity-50 cursor-not-allowed",
		),
};
