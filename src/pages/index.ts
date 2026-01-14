import HomePage from "./Home";
import SkillsPage from "./Skills";
import ProjectsPage from "./Projects";
import ContactPage from "./Contact";
import AboutPage from "./About";
import CertificatesPage from "./Certificates";
import data from "@/data";

const pages = [
	{
		name: "Home",
		url: `${data.baseUrl}`,
		component: HomePage,
		index: true,
	},
	{
		name: "Skills",
		url: `${data.baseUrl}skills`,
		component: SkillsPage,
	},
	{
		name: "Projects",
		url: `${data.baseUrl}projects`,
		component: ProjectsPage,
	},
	{
		name: "Certificates",
		url: `${data.baseUrl}certificates`,
		component: CertificatesPage,
	},
	{
		name: "Contact",
		url: `${data.baseUrl}contact`,
		component: ContactPage,
	},
	{
		name: "About",
		url: `${data.baseUrl}about`,
		component: AboutPage,
	},
];

export default pages;
export { HomePage as Home, SkillsPage as Skills, ProjectsPage as Projects, ContactPage as Contact, AboutPage as About };
