import { SocialMedia } from "@/components/SocialMedia";
import Form from "@/components/form";
import MessageBox from "@/components/message";
import ContactProvider from "@/contexts/contact/provider";

function ContactPage() {
	return (
		<ContactProvider>
			<div className="container mx-auto px-4">
				<MessageBox />
				<h1 className="text-4xl font-bold text-center gradient-text mb-12">Get in Touch</h1>
				<div className="max-w-2xl mx-auto">
					<div className="bg-[#2a0a0a]/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-amber-500/20">
						<Form />
						<SocialMedia />
					</div>
				</div>
			</div>
		</ContactProvider>
	);
}

export default ContactPage;
