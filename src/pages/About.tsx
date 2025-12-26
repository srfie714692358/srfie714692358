function About() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">About Me</h1>
			<div className="max-w-4xl mx-auto bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
				<div className="space-y-6 text-gray-300">
					<p className="text-red-100 leading-relaxed mb-4">
						Hello! I'm Sajjad Rafiee, a passionate and dedicated beginner Full Stack Developer with a strong desire to
						create meaningful web applications. My journey into web development began with a fascination for
						technology and problem-solving, which led me to explore the vast world of programming.
					</p>
					<p className="text-red-100 leading-relaxed mb-4">
						Despite being at the beginning of my professional journey, I've invested countless hours in learning and
						practicing modern web development technologies. I've built a strong foundation in both frontend and
						backend development, working with React for creating dynamic user interfaces and Django for robust backend
						solutions.
					</p>
					<p className="text-red-100 leading-relaxed mb-4">
						My approach to development focuses on writing clean, maintainable code and creating intuitive user
						experiences. I believe in the power of modern tools and frameworks to build efficient applications, which
						is why I've embraced technologies like TypeScript for type-safe code, Tailwind CSS for responsive designs,
						and Framer Motion for smooth animations.
					</p>
					<p className="text-red-100 leading-relaxed mb-4">
						Through self-directed learning and personal projects, I've developed practical experience in full-stack
						development. Each project I undertake is an opportunity to learn something new and improve my skills. I'm
						particularly proud of my work on a Todo List application, a Weather App, and a Translator Extension, each
						of which has helped me understand different aspects of web development.
					</p>
					<p className="text-red-100 leading-relaxed mb-4">
						I'm constantly learning and staying updated with the latest web development trends and best practices. My
						goal is to grow into a professional developer who can contribute to meaningful projects and create
						solutions that make a difference.
					</p>
					<div className="flex justify-center space-x-6 mt-8">
						<a
							href="https://github.com/srfie714692358"
							target="_blank"
							className="text-red-600 hover:text-amber-500 transition-colors duration-300 text-2xl"
						>
							<i className="fab fa-github"></i>
						</a>
						<a
							href="https://linkedin.com/in/sajjad-rafiee-91294a246"
							target="_blank"
							className="text-red-600 hover:text-amber-500 transition-colors duration-300 text-2xl"
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://www.instagram.com/srafie2004/"
							target="_blank"
							className="text-red-600 hover:text-amber-500 transition-colors duration-300 text-2xl"
						>
							<i className="fab fa-instagram"></i>
						</a>
						<a
							href="https://t.me/SajjadRafieeTabriz"
							target="_blank"
							className="text-red-600 hover:text-amber-500 transition-colors duration-300 text-2xl"
						>
							<i className="fab fa-telegram"></i>
						</a>
						<a
							href="https://x.com/Sajjad61837849"
							target="_blank"
							className="text-red-600 hover:text-amber-500 transition-colors duration-300 text-2xl"
						>
							<i className="fab fa-x-twitter"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
