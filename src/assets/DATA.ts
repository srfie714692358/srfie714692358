import { imgs, pdfs } from "./certificates";
import { projectsImage } from "./projects-image";
import profileImage from "./profile-image.jpg";

import Github from "@/assets/Icons/Github";
import Instagram from "@/assets/Icons/Instagram";
import LinkedIn from "@/assets/Icons/LinkedIn";
import Telegram from "@/assets/Icons/Telegram";
import X from "@/assets/Icons/X";

export default {
	name: "Elshen",
	family: "Tabrizi",
	image: profileImage,
	about: `Hi, my name is Sajjad Rafiee, also known as Elshan Tabriz. \nI'm a frontend-focused web developer who enjoys building clean, modern, and user-friendly web applications. I care a lot about code readability, structure, and maintainability, and I try to keep things simple and well-organized.\nI'm currently expanding my skills in 3D web development using Three.js and exploring how interactive 3D experiences can be integrated into modern web applications.\nAt the same time, I'm continuing my computer science studies by working on CS50P (Python) and CS50 Web Programming.`,
	certificates: [
		{
			name: "CS50x: Introduction to Computer Science",
			description: `Harvard's flagship entry-level course covering C, Python, SQL, algorithms, data structures and web development. Earned after completing ten problem sets and a final project.`,
			image: imgs.CS50x,
			pdf: pdfs.CS50x,
			url: "https://cs50.harvard.edu/certificates/63406046-bd7b-428e-94ce-83e9f042e683",
			completed: true,
		},
		{
			name: "CS50p: Introduction to Programming with Python",
			description: `Follow-up to CS50x that dives deeper into Python, focusing on file I/O, regular expressions, object-oriented design, and building CLI & web apps with Flask.`,
			image: imgs.Template,
			pdf: null,
			url: "#",
			completed: false,
		},
		{
			name: "CS50w: Web Programming with Python & JavaScript",
			description: `Project-based exploration of modern web stacks: Django, React, JavaScript ES6+, APIs, testing, CI/CD, scalability and security best-practices.`,
			image: imgs.Template,
			pdf: null,
			url: "#",
			completed: false,
		},
	],
	skills: [
		{
			name: "Python",
			percentage: 90,
			description: "",
			icon: null,
		},
		{
			name: "JavaScript",
			percentage: 75,
			description: "",
			icon: null,
		},
		{
			name: "React",
			percentage: 90,
			description: "",
			icon: null,
		},
		{
			name: "Framer Motion",
			percentage: 50,
			description: "",
			icon: null,
		},
		{
			name: "ShadcnUI",
			percentage: 80,
			description: "",
			icon: null,
		},
		{
			name: "Tailwind css",
			percentage: 75,
			description: "",
			icon: null,
		},
		{
			name: "Type Script",
			percentage: 40,
			description: "",
			icon: null,
		},
		{
			name: "Django",
			percentage: 50,
			description: "",
			icon: null,
		},
	],
	projects: [
		{
			name: "Forecast weather",
			description: `You can predict your city's weather with this app.`,
			image: projectsImage.forecastWeatherApp,
			status: "completed",
			demo: "https://srfie714692358.github.io/ForecastWeather/",
			repository: "https://github.com/srfie714692358/ForecastWeather",
			technologies: [],
		},
		{
			name: "Translate extension",
			description: `You can translate any word or text on any website by this extension, also you can add the word or text to a leitner box.`,
			image: projectsImage.translatorExtension,
			status: "Not started yet.",
			demo: null,
			repository: null,
			technologies: [],
		},
	],
	socialMedia: [
		{
			name: "Instagram",
			icon: Instagram,
			url: "https://www.instagram.com/srafie2004/",
		},
		{
			name: "Github",
			icon: Github,
			url: "https://github.com/srfie714692358",
		},
		{
			name: "LinkedIn",
			icon: LinkedIn,
			url: "https://linkedin.com/in/sajjad-rafiee-tabriz",
		},
		{
			name: "Twitter",
			icon: X,
			url: "https://x.com/Sajjad61837849",
		},
		{
			name: "Telegram",
			icon: Telegram,
			url: "https://t.me/ElshanTabriz",
		},
	],
	baseUrl: "/",
};
