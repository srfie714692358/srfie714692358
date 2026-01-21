import { page } from "@/animations/page";
import { motion } from "framer-motion";

export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<motion.div variants={page} initial="initial" animate="animate" exit="exit" className="w-full h-full">
			{children}
		</motion.div>
	);
}
