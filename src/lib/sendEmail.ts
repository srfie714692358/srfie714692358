import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export type EmailData = {
	name: string;
	email: string;
	message: string;
};

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
