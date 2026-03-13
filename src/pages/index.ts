import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Skills = lazy(() => import("@/pages/Skills"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const Certificates = lazy(() => import("@/pages/Certificates"));

export { Home, Skills, Projects, Contact, About, Certificates };
