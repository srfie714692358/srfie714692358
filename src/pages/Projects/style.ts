import { cn } from "@/shared/utils/cn";

export const projectsStyles = {
	container: "container grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16",
	project: {
		container: cn(
			"relative rounded-xl transition-discrete duration-200",
			"card-shadow overflow-hidden md:overflow-visible",
			"bg-(--color-bg-surface) border-2 border-(--color-border-default)",
		),
		description: "mb-6 text-sm text-secondary leading-relaxed",
		status: "px-4 py-1.5 rounded-full text-xs font-semibold border border-(--color-border-soft)",
	},
};
