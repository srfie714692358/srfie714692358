import type { MotionEleProps } from "@/shared/types/motionEle";

export type SkillMotions = {
	skill: {
		container: MotionEleProps<"div">;
		progress: (percentage: number) => MotionEleProps<"div">;
	};
};
