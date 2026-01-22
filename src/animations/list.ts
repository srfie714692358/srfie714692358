import type { Variants } from "framer-motion";

export const list: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
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
};

export const listItem: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.35, ease: "easeIn" },
	},
};
