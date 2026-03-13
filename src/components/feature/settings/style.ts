import { cn } from "@/shared/utils/cn";

export const settingsStyles = {
	icon: cn("cursor-pointer hover:scale-120", "transition-transform duration-500"),
	container: (isMedium?: boolean) =>
		cn(
			"p-4 w-60 rounded-xl",
			"absolute top-10 z-1",
			"border border-(--color-border-default)",
			"bg-(--color-bg-surface)",
			isMedium && "overflow-hidden",
		),
	item: {
		container: cn(
			"flex flex-row justify-between gap-2 py-2",
			"border-b border-(--color-border-default) last:border-0",
			"hover:text-secondary transition-colors",
		),
		label: "text-sm font-medium text-nowrap",
	},
	dropdownPosition: (isMedium?: boolean) => (isMedium ? "" : "top-6 left-61"),
};
