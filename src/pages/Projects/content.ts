import { projectsImage } from "@/assets/projects-image";
import type { TProject } from "./type";
import { mySkills } from "@/shared/data/skill";

export const projects: TProject[] = [
	{
		name: "Forecast weather",
		description: `A website that you can predict your city's weather. This app can predict next 24 hours and 5 days weather. I hope you enjoy it.`,
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
		description: `You can translate any word or text on any website and also save the words of the text in lietner box to learn it. I hope you enjoy it.`,
		image: projectsImage.translatorExtension,
		status: "Under development",
		demo: null,
		repository: null,
		technologies: [mySkills["React"], mySkills["Tailwind css"], mySkills["Type Script"], mySkills["ShadcnUI"]],
	},
];

