import DATA from "@/assets/DATA";

type BlurProps = { text?: string | null };
const Blur = ({ text }: BlurProps) => (
	<div className="absolute inset-0 grid place-content-center bg-black/30 backdrop-blur-xs">
		{text && <p className="text-2xl font-bold">{text}</p>}
	</div>
);

function Certificates() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Certificates</h1>

			<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{DATA.certificates.map((project) => (
					<span className="project-card rounded-xl overflow-hidden block">
						<div className="relative overflow-hidden h-60">
							<img src={project.image} alt={project.name} className="project-image w-full h-full object-cover" />
							<Blur />
							<img
								src={project.image}
								alt={project.name}
								className="absolute top-0 left-25 h-full project-image object-contain"
							/>
							{!project.completed && <Blur text="It's not ready yet." />}
						</div>
						<div className="p-6">
							<h3 className="text-2xl font-bold text-amber-100 mb-3">{project.name}</h3>
							<p className="text-red-100 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								<a
									{...(project.completed && { href: project.url })}
									className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp"
								>
									Let's see on harvard
								</a>
								<a
									{...(project.completed && { href: project.pdf as string })}
									className="tech-tag px-3 py-1 rounded-full text-sm gold-sharp"
								>
									PDF
								</a>
							</div>
						</div>
					</span>
				))}
			</div>
		</div>
	);
}

export default Certificates;
