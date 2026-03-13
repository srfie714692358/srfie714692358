import { useEffect } from "react";
import { useMessageStore } from "@/store/useMessageStore";

export function useEnforceMessageLimit(limit: number) {
	const remove = useMessageStore((state) => state.remove);
	const messages = useMessageStore((state) => state.messages);

	useEffect(() => {
		const msgsArray = Object.values(messages);
		if (msgsArray.length > limit) {
			const sortedMsgs = [...msgsArray].sort((a, b) => a.time.getTime() - b.time.getTime());
			const toRemoveCount = msgsArray.length - limit;
			const msgsToRemove = sortedMsgs.slice(0, toRemoveCount);
			msgsToRemove.forEach((msg) => remove(msg.id));
		}
	}, [messages, limit, remove]);
}
