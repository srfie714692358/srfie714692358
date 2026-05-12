import { MotionDiv } from "@/components/provider";
import { easeIn, easeOut } from "@/shared/motion/tokens";
import { cn } from "@/shared/utils/cn";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence, type Variants } from "framer-motion";
import { useCallback, useState, type ReactNode } from "react";

//  ============================== Types ====================================
type Props = {
	trigger?: ReactNode;
	children?: ReactNode;
	open?: boolean;
	onOpenChange?: (prev?: boolean, next?: boolean) => void | boolean;
	align?: "end" | "center" | "start";
	side?: "bottom" | "left" | "right" | "top";
	sideOffset?: number;
	alignOffset?: number;
	variants?: Variants;
	classNames?: { trigger?: string; content?: string };
};

//  ============================== Styles ====================================
const styles = {
	trigger: (className?: string) => cn("focus-ring", "transition-transform duration-500 rounded", className),
	content: (className?: string) =>
		cn("p-4 w-70 rounded-md", "border border-main", "bg-surface-3 elevation-2", className),
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
function Popover(props: Props) {
	const [isOpen, setOpen] = useState(false);
	const open = props.open !== undefined ? props.open : isOpen;
	const onOpenChange = useCallback(
		(state: boolean) => {
			setOpen((prev) => props.onOpenChange?.(prev, state) ?? state);
		},
		[props],
	);

	return (
		<PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
			<PopoverPrimitive.Trigger asChild>
				<button className={styles.trigger(props.classNames?.trigger)}>{props.trigger}</button>
			</PopoverPrimitive.Trigger>

			<AnimatePresence mode="wait">
				{open && (
					<PopoverPrimitive.Portal forceMount>
						<PopoverPrimitive.Content
							align={props.align || "start"}
							side={props.side}
							sideOffset={props.sideOffset || 15}
							alignOffset={props.alignOffset}
							asChild
						>
							<MotionDiv
								v={props.variants || fadeDown}
								className={styles.content(props.classNames?.content)}
							>
								{props.children}
							</MotionDiv>
						</PopoverPrimitive.Content>
					</PopoverPrimitive.Portal>
				)}
			</AnimatePresence>
		</PopoverPrimitive.Root>
	);
}

export default Popover;
