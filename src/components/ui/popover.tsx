import { MotionDiv } from "@/components/provider";
import { easeIn, easeOut } from "@/shared/motion/tokens";
import { cn } from "@/shared/utils/cn";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence, type Variants } from "framer-motion";
import { useState, type ReactNode } from "react";

//  ============================== Types ====================================
type Props = {
	trigger?: ReactNode;
	children?: ReactNode;
	classNames?: { trigger?: string; container?: string };
};

//  ============================== Styles ====================================
const styles = {
	trigger: (className?: string) =>
		cn("hover:scale-110 focus-ring", "transition-transform duration-500 rounded", className),
	container: (className?: string) =>
		cn("p-4 w-60 rounded-md", "border border-main", "bg-surface-3 elevation-2", className),
};

//  =========================== Motion Variants ================================
const fadeDown: Variants = {
	initial: { opacity: 0, y: -15 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: easeOut },
	},
	exit: {
		opacity: 0,
		y: -15,
		transition: { duration: 0.2, ease: easeIn },
	},
};

//  ============================ Components ====================================
function Popover({ trigger, children, classNames }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
			<PopoverPrimitive.Trigger asChild>
				<button className={styles.trigger(classNames?.trigger)}>{trigger}</button>
			</PopoverPrimitive.Trigger>

			<AnimatePresence mode="wait">
				{open && (
					<PopoverPrimitive.Portal forceMount>
						<PopoverPrimitive.Content align="start" sideOffset={15} asChild>
							<MotionDiv v={fadeDown} className={styles.container(classNames?.container)}>
								{children}
							</MotionDiv>
						</PopoverPrimitive.Content>
					</PopoverPrimitive.Portal>
				)}
			</AnimatePresence>
		</PopoverPrimitive.Root>
	);
}

export default Popover;
