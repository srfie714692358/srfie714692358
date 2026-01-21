import { type Variants } from "framer-motion";
import { easeIn, easeOut } from "./tokens";

export const messageVariants: Variants = {
	initial: (isMobile: boolean) => ({
		opacity: 0,
		...(isMobile ? { y: -20 } : { x: 40 }),
	}),
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: {
			duration: 0.35,
			ease: easeOut,
		},
	},
	exit: (isMobile: boolean) => ({
		opacity: 0,
		transition: {
			duration: 0.25,
			ease: easeIn,
		},
		...(isMobile ? { y: -20 } : { x: 40 }),
	}),
};
