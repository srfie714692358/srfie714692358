import { cn } from "@/shared/utils/cn";

export const dropdownStyles = {
	mainBtn: cn(
		"px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer",
		"border border-(--color-border-soft) select-none",
	),
	container: (isMedium?: boolean) =>
		cn(
			"min-w-max rounded-lg shadow-xl",
			"border border-(--color-border-soft) bg-(--color-bg-surface)",
			"absolute z-2 p-3",
			isMedium && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm m-0",
		),
	item: (active: boolean) =>
		cn(
			"block px-3 py-2 min-w-40 rounded cursor-pointer z-3",
			"text-sm text-secondary hover:text-primary whitespace-nowrap",
			"bg-(--color-bg-button) hover:bg-(--color-bg-button-hover) active:bg-(--color-bg-button-active) transition-colors",
			active && "bg-(--color-bg-button-active) hover:bg-(--color-bg-button-active) cursor-default",
		),
};
