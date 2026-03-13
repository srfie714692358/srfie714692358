import { useMessageStore } from "@/store/useMessageStore";
import type { Message } from "../types/message";

export function useMessage() {
	const { add, remove } = useMessageStore((state) => state);

	const success = (title: Message["title"], contents: Message["contents"]) => {
		add({ title, contents, type: "success" });
	};

	const error = (title: Message["title"], contents: Message["contents"]) => {
		add({ title, contents, type: "error" });
	};

	const info = (title: Message["title"], contents: Message["contents"]) => {
		add({ title, contents, type: "info" });
	};

	return { success, error, info, remove };
}
