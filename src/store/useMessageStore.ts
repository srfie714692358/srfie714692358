import { create } from "zustand";
import type { Message, MessageStore } from "@/shared/types/message";

export const useMessageStore = create<MessageStore>((set, get) => ({
	messages: {},

	add: (m) => {
		const id: string = crypto.randomUUID();
		const newMsg: Message = { ...m, id, time: new Date() };
		set((state) => ({ messages: { ...state.messages, [id]: newMsg } }));
		setTimeout(() => get().remove(id), m.duration || 10000);
		return id;
	},

	remove: (id) => {
		set((state) => {
			const newMsgs = { ...state.messages };
			delete newMsgs[id];
			return { messages: newMsgs };
		});
	},

	clear: () => set({ messages: {} }),
}));
