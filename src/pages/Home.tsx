import data from "@/data";
import pages from ".";
import { NavLink } from "react-router";

function Home() {
	const contactPage = pages.find((page) => page.name.toLowerCase().includes("contact"));
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="flex flex-col md:flex-row items-center justify-center gap-12">
				<div className="md:w-1/3 flex justify-center items-center">
					<div className="relative w-96 h-96">
						<div className="gradient-bg"></div>
						<img
							src={data.personal.image}
							alt={`${data.personal.name} ${data.personal.family}`}
							className="absolute w-full h-full rounded-full object-cover object-top border-4 border-amber-500/30 
                                    profile-shadow float-animation hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</div>

				<div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
					<h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Hello, I'm {data.personal.name}</h1>
					<div className="space-y-4 text-amber-200 font-medium">
						{data.personal.about.split("\n").map((paraph, ind) => (
							<p key={ind} className="leading-relaxed">
								{paraph}
							</p>
						))}
					</div>
					<div className="flex justify-center md:justify-start gap-6 pt-6">
						{contactPage && (
							<NavLink
								to={contactPage.url}
								className="px-6 py-3 border-2 border-amber-500/50 text-amber-500 rounded-full hover:bg-amber-500/10 
                                  hover:border-amber-400 transform hover:scale-105 transition-all duration-300"
							>
								Get in Touch
							</NavLink>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
