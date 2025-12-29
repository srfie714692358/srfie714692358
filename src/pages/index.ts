import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Certificates from "./Certificates";
import DATA from "@/assets/DATA";

const PAGES = [
	{
		name: "Home",
		url: `${DATA.baseUrl}`,
		component: Home,
		index: true,
	},
	{
		name: "Skills",
		url: `${DATA.baseUrl}skills`,
		component: Skills,
	},
	{
		name: "Projects",
		url: `${DATA.baseUrl}projects`,
		component: Projects,
	},
	{
		name: "Certificates",
		url: `${DATA.baseUrl}certificates`,
		component: Certificates,
	},
	{
		name: "Contact",
		url: `${DATA.baseUrl}contact`,
		component: Contact,
	},
	{
		name: "About",
		url: `${DATA.baseUrl}about`,
		component: About,
	},
];

export default PAGES;
export { Home, Skills, Projects, Contact, About };
