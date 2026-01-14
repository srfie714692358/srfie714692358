import data from "@/data";

function SocialMedia() {
	return (
		<div className="mt-8 flex justify-center space-x-6">
			{data.socialMedia.map((link) => (
				<a
					key={link.name}
					href={link.url}
					target="_blank"
					className="text-amber-500 hover:text-amber-700 transition-colors duration-300 text-2xl"
				>
					{<link.icon className="w-8 h-8 p-0.5" />}
				</a>
			))}
		</div>
	);
}

export { SocialMedia };
