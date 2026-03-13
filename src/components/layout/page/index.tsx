import { MotionDiv } from "@/components/provider";
import { pageVariants as variants } from "./motion";
import { pageStyles as styles } from "./style";

export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className={styles.main}>
			<MotionDiv v={variants} className="w-full h-full">
				{children}
			</MotionDiv>
		</main>
	);
}
