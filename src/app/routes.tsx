import { type RouteObject } from "react-router";
import { Home, Skills, Projects, Certificates, Contact, About } from "@/pages";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/skills",
		element: <Skills />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/certificates",
		element: <Certificates />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/about",
		element: <About />,
	},
];
