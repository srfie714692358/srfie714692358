import { Message } from "@/components/ui/message";
import { AnimatePresence } from "framer-motion";

import { useMessageStore } from "@/store/useMessageStore";
import { useMediaQuery, useEnforceMessageLimit } from "@/shared/hooks";
import { messageBoxStyles as styles } from "./style";

export default function MessageBox() {
	const messages = useMessageStore((state) => state.messages);
	const msgsArray = Object.values(messages);
	const isMedium = useMediaQuery("md");
	useEnforceMessageLimit(isMedium ? 1 : 3);

	return (
		<div className={styles.container}>
			<AnimatePresence>
				{msgsArray.map((msg) => (
					<Message key={msg.id} {...msg} />
				))}
			</AnimatePresence>
		</div>
	);
}
