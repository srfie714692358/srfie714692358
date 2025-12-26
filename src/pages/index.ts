import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const PAGES = [
	{
		name: "Home",
		url: "/",
		component: Home,
	},
	{
		name: "Skills",
		url: "/skills",
		component: Skills,
	},
	{
		name: "Projects",
		url: "/projects",
		component: Projects,
	},
	{
		name: "Contact",
		url: "/contact",
		component: Contact,
	},
	{
		name: "About",
		url: "/about",
		component: About,
	},
];

export default PAGES;
export { Home, Skills, Projects, Contact, About };
