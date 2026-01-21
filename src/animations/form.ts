import type { Variants } from "framer-motion";

export const field: Variants = {
	hidden: { opacity: 0, y: 6 },
	visible: { opacity: 1, y: 0 },
};

export const error: Variants = {
	initial: { opacity: 0, y: 4, height: 0 },
	animate: { opacity: 1, y: 0, height: "auto" },
	exit: { opacity: 0, y: 4, height: 0 },
};

export const collapse: Variants = {
	hidden: { height: 0, opacity: 0 },
	visible: { height: "auto", opacity: 1 },
};
