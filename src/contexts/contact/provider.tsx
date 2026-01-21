import { useCallback, useState, type ReactNode } from "react";
import ContactContext from "./context";
import type { MessageT } from "@/types/contactContext";

export default function ContactProvider({ children }: { children: ReactNode }) {
	const [messages, setMessages] = useState<MessageT[]>([]);
	const addMessage = useCallback((message: MessageT) => setMessages((prev) => [...prev, message]), []);
	const removeMessage = useCallback((messageId: string) => {
		setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
	}, []);

	return <ContactContext.Provider value={{ messages, addMessage, removeMessage }}>{children}</ContactContext.Provider>;
}
