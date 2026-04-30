import { MotionDiv, MotionImg } from "@/components/provider";
import Dropdown from "@/components/ui/dropdown";

import type { TProject } from "./type";
import { list, listItem } from "@/shared/motion/list";
import { projectsStyles as styles } from "./style";
import { projects } from "./content";

function ProjectsPage() {
	return (
		<MotionDiv v={list} className={styles.container}>
			<h1 className="page-title md:col-span-2 mx-auto">My Projects</h1>
			{projects.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</MotionDiv>
	);
}

function Project({ project }: { project: TProject }) {
	const links = [
		{ content: "Demo", url: project.demo || "#" },
		{ content: "Repository", url: project.repository || "#" },
	];

	return (
		<MotionDiv v={listItem} useDefault className={styles.project.container}>
			<ProjectImage src={project.image} alt={project.name} />
			<div className="p-6">
				<h3 className="text-2xl font-bold mb-3">{project.name}</h3>
				<p className={styles.project.description}>{project.description}</p>
				<div className="flex flex-wrap gap-3 items-center">
					<span className={styles.project.status}>{project.status}</span>
					<Dropdown
						text="Technologies"
						items={project.technologies.map((tech) => ({ ...tech, content: tech.name }))}
					/>
					<Dropdown text="Let's see" items={links} />
				</div>
			</div>
		</MotionDiv>
	);
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="overflow-hidden h-48 rounded-t-xl">
			<MotionImg
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
