import type { Variants } from "framer-motion";

export const list: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.06 },
	},
};

export const listItem: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0 },
};
