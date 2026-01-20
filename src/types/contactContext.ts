export type MessageT = { id: string; title: string; messages: string[]; color: "red" | "green" };

export interface ContactContextT {
	messages?: MessageT[];

	addMessage: (v: MessageT) => void;
	removeMessage: (v: string) => void;
}
