import { useState, useEffect, useContext } from "react";
import { cn } from "@/lib/classUtils";
import { X } from "lucide-react";
import type { MessageT } from "@/types/contactContext";
import ContactContext from "@/contexts/contact/context";

export function Message({ title, messages, color }: MessageT) {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setHidden(true), 5000);
		return () => clearTimeout(timer);
	}, []);

	const baseStyles = "p-4 rounded-lg shadow-lg max-w-100 opacity-100 scale-100 pointer-events-auto transition-all duration-500";
	const redStyles = "bg-red-950/95 text-red-400 border border-red-500";
	const greenStyles = "bg-green-950/95 text-green-400 border border-green-500";

	return (
		<div className={cn(baseStyles, color === "red" ? redStyles : greenStyles, hidden && "opacity-0 translate-x-20")}>
			<div className="flex justify-between">
				<h6 className="font-semibold text-lg">{title}:</h6>
				<X className="cursor-pointer" onClick={() => setHidden(true)} />
			</div>
			<ul className="list-disc pl-8 text-sm">
				{messages.map((mes, ind) => (
					<li key={ind}>
						<p>{mes}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function MessageBox() {
	const messages = useContext(ContactContext)?.messages;

	return (
		<div className="fixed bottom-35 right-4 w-100 space-y-2 z-50 pointer-events-none overflow-hidden">
			{messages && messages.map((msg) => <Message key={msg.id} {...msg}  />)}
		</div>
	);
}
