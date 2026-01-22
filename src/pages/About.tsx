import data from "@/data";
import { SocialMedia } from "@/components/socialMedia";
import { motion } from "framer-motion";
import { list, listItem } from "@/animations/list";
import { cn } from "@/lib/classUtils";

function AboutPage() {
	const paragraphStyle = cn(
		"max-w-4xl mx-auto bg-[#2a0a0a]/40 backdrop-blur-md p-8",
		"shadow-xl rounded-2xl border border-amber-500/20"
	);
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">About Me</h1>
			<motion.div variants={list} initial="hidden" animate="visible" className={paragraphStyle}>
				<div className="space-y-6 text-gray-300 text-justify">
					{data.personal.about.split("\n").map((p, i) => (
						<motion.p key={i} variants={listItem} className="text-red-100 leading-relaxed">
							{p}
						</motion.p>
					))}
					<SocialMedia />
				</div>
			</motion.div>
		</div>
	);
}

export default AboutPage;
