import emailjs from "@emailjs/browser";
import type { EmailData } from "@/shared/types/sendEmail";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function sendEmail(data: EmailData) {
	return emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
		from_name: data.name,
		to_name: import.meta.env.VITE_EMAILJS_TO_NAME,
		from_email: data.email,
		to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
		message: data.message,
	});
}

export default sendEmail;
