import { cn } from "@/shared/utils/cn";

export const messageBoxStyles = {
	container: cn(
		"container fixed top-10 left-0 inset-x-0 flex flex-col items-center mx-auto p-5",
		"md:top-auto md:left-auto md:bottom-30 md:right-5 md:w-100",
		"z-5 pointer-events-none space-y-2",
	),
};
