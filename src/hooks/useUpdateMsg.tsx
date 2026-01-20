import ContactContext from "@/contexts/contact/context";
import type { MessageT } from "@/types/contactContext";
import { useContext, useEffect } from "react";

function useUpdateMsg(validErrors: { field: string; error: string }[], error: string | null, successful: boolean | null) {
	const { addMessage, removeMessage } = useContext(ContactContext) || {};
	useEffect(() => {
		if (!addMessage || !removeMessage) return;
		let msg = null;
		if (validErrors.length > 0) {
			msg = {
				id: `valid-err-${crypto.randomUUID()}`,
				title: "Value Problems",
				messages: validErrors.map((e) => e.error),
				color: "red",
			} as MessageT;
		} else if (error && error !== "Invalid inputs.") {
			msg = {
				id: `send-err-${crypto.randomUUID()}`,
				title: "Send Problems",
				messages: [error.toString()],
				color: "red",
			} as MessageT;
		} else if (successful) {
			msg = {
				id: `succ-msg-${crypto.randomUUID()}`,
				title: "Success",
				messages: ["Thank you! I will get back to you soon."],
				color: "green",
			} as MessageT;
		}
		if (msg) {
			addMessage(msg);
			setTimeout(() => removeMessage(msg.id), 6000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [validErrors, error, successful, addMessage]);
	return null;
}

export default useUpdateMsg;
