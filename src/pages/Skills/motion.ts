import { listItem } from "@/shared/motion/list";
import type { SkillMotions } from "./type";

export const skillMotions: SkillMotions = {
	skill: {
		container: {
			v: listItem,
			useDefault: true,
			whileHover: { scale: 1.015, transition: { duration: 0.15, ease: "easeInOut" } },
		},
		progress: (percentage) => ({
			initial: { width: 0 },
			animate: { width: `${percentage}%` },
			transition: { duration: 2, ease: "easeIn", type: "spring" },
		}),
	},
};
