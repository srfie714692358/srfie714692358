import type { ElementType } from "react";

export interface TPersonal {
	name: string;
	family: string;
	image: string; // Path to image (string)
	about: string;
}

export interface TSkill {
	name: string;
	url: string;
	description: string;
	percentage: number;
	icon: ElementType | null;
}

// Helper type for accessing skills by name (Record<"SkillName", TSkill>)
export type SkillMap = Record<string, TSkill>;

export interface TProject {
	name: string;
	description: string;
	status: string;
	image: string;
	demo: string | null;
	repository: string | null;
	technologies: TSkill[]; // Array of full skill objects
}

export interface TCertificate {
	name: string;
	description: string;
	image: string; // Path to cert image
	pdf: string | null; // Path to PDF
	url: string;
	completed: boolean;
}

export interface TSocial {
	name: string;
	icon: ElementType;
	url: string;
}

// This interface defines the shape of the final 'data' object exported from /data/index.js
export interface TData {
	personal: TPersonal;
	skills: TSkill[];
	projects: TProject[];
	certificates: TCertificate[];
	socialMedia: TSocial[];
	baseUrl: string;
}
