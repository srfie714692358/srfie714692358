import { MotionA, MotionDiv } from "@/components/provider";

import { list, listItem } from "@/shared/motion/list";
import { socials } from "@/shared/data/socials";
import { socialStyles as styles } from "./style";

function SocialMedia() {
	return (
		<MotionDiv className={styles.container} v={list}>
			{socials.map((link, i) => (
				<MotionA key={i} href={link.url} target="_blank" className={styles.link} v={listItem} useDefault>
					{<link.icon className="w-8 h-8 p-0.5" />}
				</MotionA>
			))}
		</MotionDiv>
	);
}

export { SocialMedia };
