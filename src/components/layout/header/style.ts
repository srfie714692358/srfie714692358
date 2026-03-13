import { cn } from "@/shared/utils/cn";

export const headerStyle = {
	header: (className: string | undefined) => {
		return cn(
			"fixed top-0 z-1",
			"w-full shadow-lg",
			"bg-(--color-bg-page)/85 backdrop-blur-sm",
			className,
		);
	},
	navbar: "flex justify-between container mx-auto p-4",
	linkContainer: {
		desktop: "hidden md:flex space-x-8",
		mobile: "px-2 pt-2 sm:px-3 flex flex-col items-center",
	},
	link: {
		desktop: "nav-link",
		mobile: "block w-full text-center py-3 border-b",
	}
};
