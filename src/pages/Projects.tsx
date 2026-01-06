import data from "@/data";
import type { TProject, TSkill } from "@/types";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="overflow-hidden h-48 rounded-t-xl group/img">
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
			/>
		</div>
	);
}

function TechDropdown({ technologies }: { technologies: TSkill[] }) {
	return (
		<div className="relative group/tech">
			<span className="tech-tag cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold gold-sharp text-amber-400 border border-amber-500/30 select-none">
				Technologies
			</span>

			<ul className="hidden group-hover/tech:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-2 bg-[#1a0505] border border-amber-500/30 rounded-lg shadow-xl z-20">
				{technologies.map((tech) => (
					<li key={tech.name} className="mb-1 last:mb-0">
						<a
							href={tech.url}
							target="_blank"
							rel="noopener noreferrer"
							className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-[#2c0909] rounded transition-colors"
						>
							{tech.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function LinksDropdown({ demo, repository }: { demo: string | null; repository: string | null }) {
	return (
		<div className="relative group/links">
			<span className="tech-tag cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold gold-sharp text-amber-400 border border-amber-500/30 select-none">
				Let's see
			</span>

			<ul className="hidden group-hover/links:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 p-2 bg-[#1a0505] border border-amber-500/30 rounded-lg shadow-xl z-20">
				<li>
					<a
						href={demo || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className="block px-3 py-2 text-sm text-center text-slate-300 hover:text-amber-400 hover:bg-[#2c0909] rounded transition-colors"
					>
						Live Demo
					</a>
				</li>
				<li>
					<a
						href={repository || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className="block px-3 py-2 text-sm text-center text-slate-300 hover:text-amber-400 hover:bg-[#2c0909] rounded transition-colors"
					>
						Repository
					</a>
				</li>
			</ul>
		</div>
	);
}

function Project({ project }: { project: TProject }) {
	return (
		<div className="project-card rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
			<ProjectImage src={project.image} alt={project.name} />

			<div className="p-6">
				<h3 className="text-2xl font-bold text-amber-100 mb-3">{project.name}</h3>
				<p className="text-red-100 mb-6 text-sm leading-relaxed opacity-80">{project.description}</p>
				<div className="flex flex-wrap gap-3 items-center">
					<span className="tech-tag px-4 py-1.5 rounded-full text-xs font-semibold gold-sharp text-amber-400 border border-amber-500/30">
						{project.status}
					</span>
					<TechDropdown technologies={project.technologies} />
					<LinksDropdown demo={project.demo} repository={project.repository} />
				</div>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold text-center gradient-text mb-16 pb-2">My Projects</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{data.projects.map((project) => (
					<Project key={project.name} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
