import DATA from "@/assets/DATA";

function Projects() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Projects</h1>

			<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{DATA.projects.map((project) => (
					<a href={project.demo || "#"} className="project-card rounded-xl overflow-hidden block">
						<div className="overflow-hidden h-48">
							<img src={project.image} alt={project.name} className="project-image w-full h-full object-cover" />
						</div>
						<div className="p-6">
							<h3 className="text-2xl font-bold text-amber-100 mb-3">{project.name}</h3>
							<p className="text-red-100 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								<span className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp">{project.status}</span>
								<span className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp">Technologies</span>
								<span className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp">Let's see</span>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

export default Projects;
