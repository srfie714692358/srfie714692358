import DATA from "@/assets/DATA";

function Skills() {
	return (
		<div className="container mx-auto px-4">
			<h2 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Skills</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				{DATA.skills.map((skill) => (
					<div key={skill.name} className="skill-card p-6 rounded-xl">
						<div className="flex items-center mb-4">
							{skill.icon}
							<h3 className="text-xl font-semibold text-amber-100">{skill.name}</h3>
						</div>
						<div className="h-2 bg-gray-200/10 rounded-full overflow-hidden">
							<div
								className="progress-bar h-full rounded-full animate-fill"
								style={{ width: skill.percentage + "%" }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
