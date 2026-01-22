import data from "@/data";
import type { TSkill } from "@/types";
import { motion } from "framer-motion";
import { list, listItem } from "@/animations/list";

function SkillsPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="text-4xl font-bold text-center gradient-text mb-12 pb-1">My Skills</h2>
			<motion.div
				variants={list}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
			>
				{data.skills.map((skill) => (
					<Skill key={skill.name} skill={skill} />
				))}
			</motion.div>
		</div>
	);
}

function Skill({ skill }: { skill: TSkill }) {
	return (
		<motion.div variants={listItem} whileHover={{ scale: 1.01 }} className="skill-card p-6 rounded-xl">
			<a href={skill.url} target="_blank" className="flex items-center mb-4 gap-2">
				{skill.icon && <skill.icon />}
				<h3 className="text-xl font-semibold text-amber-100">{skill.name}</h3>
			</a>
			<p className="mb-3 text-sm opacity-80">{skill.description}</p>
			<div className="h-2 bg-gray-200/10 rounded-full overflow-hidden">
				<motion.div
					className="bg-amber-400 h-full rounded-full"
					initial={{ width: 0 }}
					animate={{ width: `${skill.percentage}%` }}
					transition={{ duration: 2, ease: "easeIn", type: "spring" }}
				/>
			</div>
		</motion.div>
	);
}

export default SkillsPage;
