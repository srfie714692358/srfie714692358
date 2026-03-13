import type { Variants } from "framer-motion";
import { easeOut, easeIn } from "./tokens";

export const fadeUp: Variants = {
	initial: { opacity: 0, y: 12 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: easeOut },
	},
	exit: {
		opacity: 0,
		y: 12,
		transition: { duration: 0.2, ease: easeIn },
	},
};

export const fadeDown: Variants = {
	initial: { opacity: 0, y: 0 },
	animate: {
		opacity: 1,
		y: 12,
		transition: { duration: 0.35, ease: easeOut },
	},
	exit: {
		opacity: 0,
		y: 0,
		transition: { duration: 0.2, ease: easeIn },
	},
};

export const fadeRight: Variants = {
	initial: { opacity: 0, x: 20 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.35, ease: easeOut },
	},
	exit: {
		opacity: 0,
		x: 20,
		transition: { duration: 0.2, ease: easeIn },
	},
};

export const fadeLeft: Variants = {
	initial: { opacity: 0, x: 0 },
	animate: {
		opacity: 1,
		x: 20,
		transition: { duration: 0.35, ease: easeOut },
	},
	exit: {
		opacity: 0,
		x: 0,
		transition: { duration: 0.2, ease: easeIn },
	},
};
