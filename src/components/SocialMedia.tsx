import { motion } from "framer-motion";
import data from "@/data";
import { list, listItem } from "@/animations/list";

function SocialMedia() {
	return (
		<motion.div className="mt-8 flex justify-center space-x-6" variants={list} initial="hidden" animate="visible">
			{data.socialMedia.map((link, ind) => (
				<motion.a
					key={ind}
					href={link.url}
					target="_blank"
					className="text-amber-500 hover:text-amber-700 transition-colors duration-300 text-2xl"
					variants={listItem}
				>
					{<link.icon className="w-8 h-8 p-0.5" />}
				</motion.a>
			))}
		</motion.div>
	);
}

export { SocialMedia };
