import type { TSkill, SkillMap } from "@/types";

const skills: TSkill[] = [
	{
		name: "Python",
		url: "https://www.python.org",
		description:
			"Versatile language emphasizing code readability with vast libraries for backend, data science, and automation.",
		percentage: 90,
		icon: null,
	},
	{
		name: "JavaScript",
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		description:
			"Core technology of the web, enabling interactive and dynamic behavior in browsers and server-side environments.",
		percentage: 75,
		icon: null,
	},
	{
		name: "React",
		url: "https://react.dev",
		description: "A library for building composable user interfaces using components and managing state efficiently.",
		percentage: 90,
		icon: null,
	},
	{
		name: "Framer Motion",
		url: "https://www.framer.com/motion/",
		description: "A production-ready motion library for React that makes creating complex animations and gestures simple.",
		percentage: 50,
		icon: null,
	},
	{
		name: "ShadcnUI",
		url: "https://ui.shadcn.com",
		description: "Collection of re-usable components built using Radix UI and Tailwind CSS, accessible and customizable.",
		percentage: 80,
		icon: null,
	},
	{
		name: "Tailwind css",
		url: "https://tailwindcss.com",
		description: "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
		percentage: 75,
		icon: null,
	},
	{
		name: "Type Script",
		url: "https://www.typescriptlang.org",
		description: "Typed superset of JavaScript that compiles to plain JS, catching errors early through static typing.",
		percentage: 40,
		icon: null,
	},
	{
		name: "Django",
		url: "https://www.djangoproject.com",
		description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
		percentage: 50,
		icon: null,
	},
	{
		name: "Zustand",
		url: "https://zustand-demo.pmnd.rs",
		description: "A small, fast, and scalable state-management solution using simplified flux principles.",
		percentage: 50,
		icon: null,
	},
];

const mySkills: SkillMap = skills.reduce((acc, skill) => {
	acc[skill.name] = skill;
	return acc;
}, {} as SkillMap);

export default skills;
export { mySkills };
