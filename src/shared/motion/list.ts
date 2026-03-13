import type { Variants } from "framer-motion";

export const list: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const listReverse: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: -0.1,
			delayChildren: 0.5,
		},
	},
};

export const listItem: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.35, ease: "easeIn" },
	},
};
