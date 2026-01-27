import { type Variants } from "framer-motion";

export const list: Variants = {
	initial: {
		opacity: 0,
		height: 0,
		y: 10,
		overflow: "hidden",
	},
	animate: {
		opacity: 1,
		height: "auto",
		y: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
			height: { duration: 0.3 },
		},
	},
	exit: {
		opacity: 0,
		height: 0,
		y: 10,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
			when: "afterChildren",
			height: { duration: 0.3 },
		},
	},
};

export const listItem = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};
