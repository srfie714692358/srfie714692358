export const skillStyles = {
	container: "container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-16",
	skill: {
		container: "bg-(--color-bg-surface) border-2 border-(--color-border-default) p-6 rounded-xl card-shadow",
		title: "flex items-center mb-4 gap-2 text-xl font-semibold",
		progress: {
			container: "h-3 w-full border border-(--color-border-default) rounded-full overflow-hidden",
			bar: "bg-linear-180 from-(--color-accent-primary) to-(--color-accent-secondary) w-full h-full rounded-full",
		},
	},
};
