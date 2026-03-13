import { cn } from "@/shared/utils/cn";

export const certificateStyles = {
	container: "container grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16",
	cert: {
		container: cn(
			"backdrop-blur-sm transition-all card-shadow duration-300 md:overflow-visible",
			"bg-(--color-bg-surface) border-2 border-(--color-border-default) rounded-xl",
		),
		title: "text-2xl font-bold mb-3",
		description: "text-secondary mb-4 text-sm font-medium text-justify h-20 md:h-13",
		link: "px-3 py-1 rounded-full text-sm font-semibold border border-(--color-border-soft)",
		tag: "px-3 py-1 rounded-full text-sm mx-auto w-1/2 text-center font-semibold border border-(--color-border-soft)",
	},
	img: {
		container: "relative overflow-hidden h-60 rounded-t-xl",
		background: "w-full h-full object-cover",
		main: "absolute top-0 h-full hover:scale-105 transition-transform duration-300",
	},
};
