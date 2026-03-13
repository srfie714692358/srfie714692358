import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { MotionDiv } from "@/components/provider";

import type { Message } from "@/shared/types/message";
import { useMessageStore } from "@/store/useMessageStore";
import { useMediaQuery } from "@/shared/hooks";
import { messageStyle as styles } from "./style";
import { messageVariants as variants } from "./motion";

export function Message({ id, title, contents, type }: Message) {
	const isMedium = useMediaQuery("md");
	const close = useMessageStore((state) => state.remove);
	const Icon = type === "success" ? CheckCircle : type === "error" ? AlertCircle : Info;

	return (
		<MotionDiv v={variants} custom={isMedium} className={styles.container(type)} layout>
			<Icon className="w-6 h-6 shrink-0 mt-0.5" />
			<div className="flex-1">
				<div className={styles.title}>
					<h6 className="font-semibold text-lg">{title}:</h6>
					<X className={styles.closeBtn} onClick={() => close(id)} />
				</div>
				<ul className={styles.contentList}>
					{contents.map((mes, ind) => (
						<li key={ind}>{mes}</li>
					))}
				</ul>
			</div>
		</MotionDiv>
	);
}
