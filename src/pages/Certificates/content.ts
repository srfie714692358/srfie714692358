import { imgs, pdfs } from "@/assets/certificates";
import type { TCertificate } from "./type";

export const certificates: TCertificate[] = [
	{
		name: "CS50x",
		description: `Harvard's flagship entry-level course covering C, Python, SQL, algorithms, data structures and web development. Earned after completing ten problem sets and a final project.`,
		image: imgs.CS50x,
		pdf: pdfs.CS50x,
		url: "https://cs50.harvard.edu/certificates/63406046-bd7b-428e-94ce-83e9f042e683",
		completed: true,
	},
	{
		name: "CS50p",
		description: `Follow-up to CS50x that dives deeper into Python, focusing on file I/O, regular expressions, object-oriented design, and building CLI & web apps with Flask.`,
		image: imgs.Template,
		pdf: null,
		url: "#",
		completed: false,
	},
	{
		name: "CS50w",
		description: `Project-based exploration of modern web stacks: Django, React, JavaScript ES6+, APIs, testing, CI/CD, scalability and security best-practices.`,
		image: imgs.Template,
		pdf: null,
		url: "#",
		completed: false,
	},
];

