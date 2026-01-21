import type { Variants } from "framer-motion";

export const headerVariants: Variants = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeOut",
		},
	},
};

export const menuVariants: Variants = {
	hidden: { height: 0, opacity: 0 },
	visible: {
		height: "auto",
		opacity: 1,
		transition: { duration: 0.35, ease: "easeIn" },
	},
	exit: {
		height: 0,
		opacity: 0,
		transition: { duration: 0.25, ease: "easeOut" },
	},
};
