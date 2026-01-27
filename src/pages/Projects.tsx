import data from "@/data";
import type { TProject } from "@/types";
import Dropdown from "@/components/dropdown";
import { motion } from "framer-motion";
import { list, listItem } from "@/animations/list";
import { cn } from "@/lib/classUtils";

function ProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-center gradient-text mb-16 pb-2">My Projects</h1>
			<motion.div
				variants={list}
				initial="hidden"
				animate="visible"
				className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
			>
				{data.projects.map((project) => (
					<Project key={project.name} project={project} />
				))}
			</motion.div>
		</div>
	);
}

function Project({ project }: { project: TProject }) {
	const links = [
		{ name: "Demo", url: project.demo || "#" },
		{ name: "Repository", url: project.repository || "#" },
	];

	const cardStyle = cn(
		"project-card rounded-xl ",
		"bg-slate-800/50 backdrop-blur-sm",
		"border border-slate-700/50 overflow-hidden md:overflow-visible"
	);
	return (
		<motion.div variants={listItem} whileHover={{ scale: 1.01 }} className={cardStyle}>
			<ProjectImage src={project.image} alt={project.name} />
			<div className="p-6">
				<h3 className="text-2xl font-bold text-amber-100 mb-3">{project.name}</h3>
				<p className="text-red-100 mb-6 text-sm leading-relaxed opacity-80">{project.description}</p>
				<div className="flex flex-wrap gap-3 items-center">
					<span className="tech-tag px-4 py-1.5 rounded-full text-xs font-semibold gold-sharp text-amber-400 border border-amber-500/30">
						{project.status}
					</span>
					<Dropdown title="Technologies" items={project.technologies} />
					<Dropdown title="Let's see" items={links} />
				</div>
			</div>
		</motion.div>
	);
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="overflow-hidden h-48 rounded-t-xl">
			<motion.img
				src={src}
				alt={alt}
				className="w-full h-full object-cover"
				whileHover={{ scale: 1.08 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			/>
		</div>
	);
}

export default ProjectsPage;
