import { cn } from "@/lib/ClassUtils";

type BlurProps = { children?: React.ReactNode; className?: string };
const Blur = ({ children, className }: BlurProps) => (
	<div className={cn("absolute inset-0 bg-black/30 backdrop-blur-xs", className)}>{children}</div>
);

export default Blur;
