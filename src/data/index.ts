import personal from "./personal";
import skills from "./skills";
import projects from "./projects";
import certificates from "./certificates";
import socials from "./socials";
import type { TData } from "@/types";
export const BASE_URL = import.meta.env.BASE_URL;

const data: TData = {
	personal,
	skills,
	projects,
	certificates,
	socialMedia: socials,
	baseUrl: BASE_URL,
};

export default data;
