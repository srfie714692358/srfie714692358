import DATA from "@/assets/DATA";

function About() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">About Me</h1>
			<div className="max-w-4xl mx-auto bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
				<div className="space-y-6 text-gray-300">
					{DATA.about.split("\n").map((paraph, ind) => (
						<p key={ind} className="text-red-100 leading-relaxed mb-4">
							{paraph}
						</p>
					))}
					<div className="flex justify-center space-x-6 mt-8">
						{DATA.socialMedia.map((link) => (
							<a
								key={link.name}
								href={link.url}
								target="_blank"
								className="text-amber-500 hover:text-amber-700 transition-colors duration-300 text-2xl "
							>
								{<link.icon className="w-8 h-8 p-0.5" />}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
