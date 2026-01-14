import data from "@/data";
import { SocialMedia } from "@/components/SocialMedia";

function AboutPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">About Me</h1>
			<div className="max-w-4xl mx-auto bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
				<div className="space-y-6 text-gray-300 text-justify">
					{data.personal.about.split("\n").map((paraph, ind) => (
						<p key={ind} className="text-red-100 leading-relaxed mb-4">
							{paraph}
						</p>
					))}
					<SocialMedia />
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
