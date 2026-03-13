import { cn } from "@/shared/utils/cn";

export const homeStyles = {
	container: "px-4 py-16 flex flex-col justify-center items-center md:flex-row gap-12",
	image: cn(
		"relative object-cover object-top",
		"border-4 border-(--color-border-default)",
		"w-96 h-96 rounded-full profile-shadow",
	),
	about: "space-y-4 font-normal text-secondary text-justify leading-relaxed",
	btn: cn(
		"px-6 py-3 font-medium border-2 rounded-full",
		"border-(--color-border-default) bg-(--color-bg-button) hover:bg-(--color-bg-button-hover)",
	),
};
