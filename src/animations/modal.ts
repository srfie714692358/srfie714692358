import type { Variants } from "framer-motion";

export const modalContent: Variants = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", damping: 25, stiffness: 300 },
	},
	exit: { opacity: 0, y: 30 },
};

export const backdrop: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};
