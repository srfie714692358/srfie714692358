export interface Message {
	id: string;
	title: string;
	contents: string[];
	type: "success" | "error" | "info";
	time: Date;
	duration?: number;
}

export interface MessageStore {
	messages: { [key: Message["id"]]: Message };
	// We use Omit here so you don't have to pass 'id' and 'time' manually
	add: (m: Omit<Message, "id" | "time">) => Message["id"];
	remove: (id: Message["id"]) => void;
	clear: () => void;
}

export type MessageProps = Omit<Message, "time">;
