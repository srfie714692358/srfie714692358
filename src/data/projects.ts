import { projectsImage } from "@/assets/projects-image";
import type { TProject } from "@/types";
import { mySkills } from "./skills"; // Import the object map

const projects: TProject[] = [
	{
		name: "Forecast weather",
		description: `You can predict your city's weather with this app.`,
		image: projectsImage.forecastWeatherApp,
		status: "Evolving",
		demo: "https://srfie714692358.github.io/ForecastWeather/",
		repository: "https://github.com/srfie714692358/ForecastWeather",
		technologies: [
			mySkills["React"],
			mySkills["Tailwind css"],
			mySkills["Type Script"],
			mySkills["Zustand"],
			mySkills["ShadcnUI"],
		],
	},
	{
		name: "Translate extension",
		description: `You can translate any word or text on any website...`,
		image: projectsImage.translatorExtension,
		status: "Under development",
		demo: null,
		repository: null,
		technologies: [mySkills["React"], mySkills["Tailwind css"], mySkills["Type Script"], mySkills["ShadcnUI"]],
	},
];

export default projects;
