import type { TSkill } from "@/shared/types/skill";

export interface TProject {
	name: string;
	description: string;
	status: string;
	image: string;
	demo: string | null;
	repository: string | null;
	technologies: TSkill[];
}
