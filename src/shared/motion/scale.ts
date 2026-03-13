import type { Variants } from "framer-motion";
import { springSoft } from "./tokens";

export const scaleFade: Variants = {
	initial: { opacity: 0, scale: 0.1 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: springSoft,
	},
	exit: {
		opacity: 0,
		scale: 0.1,
		transition: { duration: 0.3 },
	},
};
