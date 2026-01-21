/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import { cn } from "@/lib/classUtils";
import { X } from "lucide-react";
import type { MessageT } from "@/types/contactContext";
import ContactContext from "@/contexts/contact/context";
import { AnimatePresence } from "framer-motion";
import { messageVariants } from "@/animations/components/message";
import { motion } from "framer-motion";

export function Message({ id, title, messages, color, isMobile }: MessageT & { isMobile: () => boolean }) {
	const { removeMessage } = useContext(ContactContext) || {};
	const baseStyles = "p-4 rounded-lg shadow-lg w-100 pointer-events-auto";
	const redStyles = "bg-red-950/95 text-red-400 border border-red-500";
	const greenStyles = "bg-green-950/95 text-green-400 border border-green-500";

	return (
		<motion.div variants={messageVariants} custom={isMobile()} initial="initial" animate="animate" exit="exit" layout>
			<div className={cn(baseStyles, color === "red" ? redStyles : greenStyles)}>
				<div className="flex justify-between">
					<h6 className="font-semibold text-lg">{title}:</h6>
					<X className="cursor-pointer" onClick={() => removeMessage?.(id)} />
				</div>
				<ul className="list-disc pl-8 text-sm">
					{messages.map((mes, ind) => (
						<li key={ind}>{mes}</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}

export default function MessageBox() {
	const messages = useContext(ContactContext)?.messages;
	const [msgLength, setMsgLength] = useState(3);
	const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
	const boxStyle = cn(
		"fixed top-10 left-0 inset-x-0 flex flex-col items-center ",
		"md:top-auto md:left-auto md:bottom-30 md:right-5 md:w-100",
		"z-50 pointer-events-none space-y-2"
	);

	useEffect(() => setMsgLength(isMobile() ? 1 : 3), []);

	return (
		<div className={boxStyle}>
			<AnimatePresence>
				{messages?.slice(-msgLength).map((msg) => (
					<Message key={msg.id} {...msg} isMobile={isMobile} />
				))}
			</AnimatePresence>
		</div>
	);
}
