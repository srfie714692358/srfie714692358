import { MotionDiv } from "@/components/provider";

import type { TSkill } from "@/shared/types/skill";
import { list } from "@/shared/motion/list";
import { skillStyles as styles } from "./style";
import { skillMotions as Motions } from "./motion";
import { skills } from "@/shared/data/skill";

function SkillsPage() {
	return (
		<MotionDiv v={list} className={styles.container}>
			<h2 className="page-title md:col-span-2 mx-auto">My Skills</h2>
			{skills.map((skill) => (
				<Skill key={skill.name} skill={skill} />
			))}
		</MotionDiv>
	);
}

function Skill({ skill }: { skill: TSkill }) {
	return (
		<MotionDiv {...Motions.skill.container} className={styles.skill.container}>
			<a href={skill.url} target="_blank" className={styles.skill.title}>
				<skill.icon />
				<h3>{skill.name}</h3>
			</a>
			<p className="mb-3 text-sm text-secondary">{skill.description}</p>
			<div className={styles.skill.progress.container}>
				<MotionDiv className={styles.skill.progress.bar} {...Motions.skill.progress(skill.percentage)} />
			</div>
		</MotionDiv>
	);
}

export default SkillsPage;
