import data from "@/data";
import pages from ".";
import { NavLink } from "react-router";
import { cn } from "@/lib/classUtils";

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
	const imgStyles = cn(
		"absolute object-cover object-top",
		"w-full h-full rounded-full border-4 border-amber-500/30 ",
		"profile-shadow float-animation",
		"hover:scale-105 transition-transform duration-300"
	);
	return (
		<div className="md:w-1/3 flex justify-center items-center">
			<div className="relative w-96 h-96">
				<div className="gradient-bg"></div>
				<img src={data.personal.image} alt={`${data.personal.name} ${data.personal.family}`} className={imgStyles} />
			</div>
		</div>
	);
}

function AboutMe() {
	return (
		<div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
			<h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Hello, I'm {data.personal.name}</h1>
			<div className="space-y-4 text-amber-200 font-medium text-justify">
				{data.personal.about.split("\n").map((paraph, ind) => (
					<p key={ind} className="leading-relaxed">
						{paraph}
					</p>
				))}
			</div>
			<ContactBtn />
		</div>
	);
}

function ContactBtn() {
	const contactPage = pages.find((page) => page.name.toLowerCase().includes("contact"));
	const btnStyles = cn(
		"text-amber-500 px-6 py-3",
		"border-2 border-amber-500/50 rounded-full",
		"hover:bg-amber-500/10 hover:border-amber-400 hover:scale-105",
		"transform transition-all duration-300"
	);
	return (
		<div className="pt-6">
			{contactPage && (
				<NavLink to={contactPage.url} className={btnStyles}>
					Get in Touch
				</NavLink>
			)}
		</div>
	);
}

export default HomePage;
