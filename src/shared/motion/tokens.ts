import type {Transition } from "framer-motion";

export const easeOut = "easeOut";
export const easeIn = "easeOut";
export const springSoft: Transition = {
	type: "spring",
	stiffness: 260,
	damping: 25,
};
