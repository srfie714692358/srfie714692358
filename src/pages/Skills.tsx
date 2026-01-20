import data from "@/data";
import type { TSkill } from "@/types";

function SkillsPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Skills</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				{data.skills.map((skill, ind) => (
					<Skill key={ind} skill={skill} />
				))}
			</div>
		</div>
	);
}

function Skill({ skill }: { skill: TSkill }) {
	return (
		<div key={skill.name} className="skill-card p-6 rounded-xl">
			<a href={skill.url} target="_blank" className="flex items-center mb-4">
				{skill.icon && <skill.icon />}
				<h3 className="text-xl font-semibold text-amber-100">{skill.name}</h3>
			</a>
			<p className="mb-2">{skill.description}</p>
			<div className="h-2 bg-gray-200/10 rounded-full overflow-hidden">
				<div className="progress-bar h-full rounded-full animate-fill" style={{ width: skill.percentage + "%" }}></div>
			</div>
		</div>
	);
}

export default SkillsPage;
