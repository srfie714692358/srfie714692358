import { type Variants } from "framer-motion";
import { easeIn, easeOut } from "@/shared/motion/tokens";

export const messageVariants: Variants = {
	initial: (isMedium: boolean) => ({
		opacity: 0,
		...(isMedium ? { y: -20 } : { x: 40 }),
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
	exit: (isMedium: boolean) => ({
		opacity: 0,
		transition: {
			duration: 0.25,
			ease: easeIn,
		},
		...(isMedium ? { y: -20 } : { x: 40 }),
	}),
};
