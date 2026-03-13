import { SocialMedia } from "@/components/feature/socialMedia";
import { list, listItem } from "@/shared/motion/list";
import { cn } from "@/shared/utils/cn";
import { personal } from "@/shared/data/personal";
import { MotionDiv, MotionP } from "@/components/provider";

function AboutPage() {
	const paragraphStyle = cn(
		"max-w-4xl mx-auto bg-(--color-bg-surface) p-8",
		"shadow-xl rounded-2xl border border-(--color-border-default)",
		"space-y-6 text-secondary font-medium text-justify leading-relaxed",
	);
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="page-title text-center">About Me</h1>
			<MotionDiv v={list} className={paragraphStyle}>
				{personal.about.split("\n").map((p, i) => (
					<MotionP key={i} v={listItem} useDefault>
						{p}
					</MotionP>
				))}
				<SocialMedia />
			</MotionDiv>
		</div>
	);
}

export default AboutPage;
