import { scaleFade } from "@/shared/motion/scale";
import type { HomeMotions } from "./type";
import { listItem } from "@/shared/motion/list";

export const homeMotions: HomeMotions = {
	image: {
		whileHover: { scale: 1.05 },
		transition: { duration: 0.6, ease: "easeOut" },
		v: scaleFade,
	},
	btn: {
		v: listItem,
		whileHover: { scale: 1.05 },
		whileTap: { scale: 0.95 },
	},
};
