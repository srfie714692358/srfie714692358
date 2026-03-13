import type { ElementType } from "react";

export interface TSkill {
	name: string;
	url: string;
	description: string;
	percentage: number;
	icon: ElementType;
}

export type SkillMap = Record<string, TSkill>;