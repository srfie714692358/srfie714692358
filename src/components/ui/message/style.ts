import type { Message } from "@/shared/types/message";
import { cn } from "@/shared/utils/cn";

export const messageStyle = {
	container: (type: Message["type"]) => {
		const typeStyles = {
			success: "bg-green-950/90 text-green-100 border-green-500/50",
			error: "bg-red-950/90 text-red-100 border-red-500/50",
			info: "bg-blue-950/90 text-blue-100 border-blue-500/50",
		};
		return cn(
			"p-4 rounded-lg shadow-lg w-full pointer-events-auto flex gap-3 items-start border",
			typeStyles[type],
		);
	},
	title: "flex justify-between items-start mb-1",
	closeBtn: "cursor-pointer hover:opacity-70 transition-opacity",
	contentList: "list-disc pl-5 text-sm space-y-1 opacity-90",
};
