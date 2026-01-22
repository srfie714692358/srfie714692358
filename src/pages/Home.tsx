import data from "@/data";
import pages from ".";
import { NavLink } from "react-router";
import { cn } from "@/lib/classUtils";
import { motion } from "framer-motion";
import { list, listItem } from "@/animations/list";

function HomePage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="flex flex-col md:flex-row items-center justify-center gap-12">
				<ProfileImage />
				<AboutMe />
			</div>
		</div>
	);
}

function ProfileImage() {
	const style = cn(
		"absolute object-cover object-top w-full h-full rounded-full",
		"profile-shadow border-4 border-amber-500/30"
	);
	return (
		<motion.div
			className="md:w-1/3 flex justify-center items-center"
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="relative w-96 h-96">
				<div className="gradient-bg" />
				<motion.img
					src={data.personal.image}
					alt={`${data.personal.name} ${data.personal.family}`}
					className={style}
					whileHover={{ scale: 1.05 }}
				/>
			</div>
		</motion.div>
	);
}

function AboutMe() {
	return (
		<motion.div
			className="md:w-1/2 text-center md:text-left space-y-6 z-10"
			variants={list}
			initial="hidden"
			animate="visible"
		>
			<motion.h1 variants={listItem} className="text-4xl md:text-6xl font-bold gradient-text mb-6">
				Hello, I'm {data.personal.name}
			</motion.h1>

			<div className="space-y-4 text-amber-200 font-medium text-justify">
				{data.personal.about.split("\n").map((p, i) => (
					<motion.p key={i} variants={listItem} className="leading-relaxed">
						{p}
					</motion.p>
				))}
			</div>
			<ContactBtn />
		</motion.div>
	);
}

function ContactBtn() {
	const contactPage = pages.find((p) => p.name.toLowerCase().includes("contact"));

	return (
		<motion.div variants={listItem} className="pt-6">
			{contactPage && (
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-fit">
					<NavLink to={contactPage.url} className="text-amber-500 px-6 py-3 border-2 border-amber-500/50 rounded-full">
						Get in Touch
					</NavLink>
				</motion.div>
			)}
		</motion.div>
	);
}

export default HomePage;
