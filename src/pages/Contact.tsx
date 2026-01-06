import data from "@/data";

function Contact() {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center gradient-text mb-12">Get in Touch</h1>

			<div className="max-w-2xl mx-auto">
				<div className="bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
					<form id="contact-form" className="space-y-6">
						<div>
							<label className="block text-amber-100 mb-2" htmlFor="name">
								Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="name"
								required
								className="w-full px-4 py-3 bg-red-950/50 border border-amber-500/30 rounded-lg 
                                          focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                          transition-all text-white placeholder-red-300/50"
								placeholder="Enter your name"
							/>
						</div>
						<div>
							<label className="block text-amber-100 mb-2" htmlFor="email">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								required
								className="w-full px-4 py-3 bg-red-950/50 border border-amber-500/30 rounded-lg 
                                          focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                          transition-all text-white placeholder-red-300/50"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							<label className="block text-amber-100 mb-2" htmlFor="message">
								Message <span className="text-red-500">*</span>
							</label>
							<textarea
								id="message"
								rows={6}
								required
								className="w-full px-4 py-3 bg-red-950/50 border border-amber-500/30 rounded-lg 
                                             focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                             transition-all text-white placeholder-red-300/50 resize-none"
								placeholder="Enter your message (minimum 10 characters)"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-linear-to-r from-red-600 to-rose-500 text-white py-3 rounded-lg 
                                       font-semibold hover:from-red-700 hover:to-rose-600 transition-all duration-300 
                                       transform hover:scale-[1.02] border border-amber-500/30"
						>
							Send Message
						</button>
					</form>

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
				</div>
			</div>
		</div>
	);
}

export default Contact;
