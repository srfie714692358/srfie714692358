import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Certificates from "./Certificates";
import data from "@/data";

const pages = [
	{
		name: "Home",
		url: `${data.baseUrl}`,
		component: Home,
		index: true,
	},
	{
		name: "Skills",
		url: `${data.baseUrl}skills`,
		component: Skills,
	},
	{
		name: "Projects",
		url: `${data.baseUrl}projects`,
		component: Projects,
	},
	{
		name: "Certificates",
		url: `${data.baseUrl}certificates`,
		component: Certificates,
	},
	{
		name: "Contact",
		url: `${data.baseUrl}contact`,
		component: Contact,
	},
	{
		name: "About",
		url: `${data.baseUrl}about`,
		component: About,
	},
];

export default pages;
export { Home, Skills, Projects, Contact, About };
