import { cn } from "@/shared/utils/cn";
import { MotionDiv } from "../provider";
import { scaleFade } from "@/shared/motion/scale";

type BlurProps = { children?: React.ReactNode; className?: string; [key: string]: unknown };
const defaultStyle = "absolute inset-0 bg-black/30 backdrop-blur-xs";

const Blur = ({ children, className, ...props }: BlurProps) => (
	<MotionDiv v={scaleFade} className={cn(defaultStyle, className)} {...props}>
		{children}
	</MotionDiv>
);

export default Blur;
