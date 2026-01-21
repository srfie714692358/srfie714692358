import type { Variants } from "framer-motion";

export const list: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.15,
		},
	},
};

export const listReverse: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: -0.1,
			delayChildren: 0.5,
		},
	},
}

export const listItem: Variants = {
	hidden: { y: 10, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.25, ease: "easeOut" },
	},
};
