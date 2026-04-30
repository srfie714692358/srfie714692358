import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, type Variants } from "framer-motion";
import { MotionDiv } from "@/components/provider";
import { useState, type ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

// ============================ Types ============================

interface Props {
	trigger?: ReactNode;
	children?: ReactNode;
	classNames?: {
		trigger?: string;
		overlay?: string;
		content?: string;
	};
}

// ============================ Styles ============================

const styles = {
	trigger: (className?: string) =>
		cn(
			"px-4 py-1.5 rounded-full text-xs font-medium",
			"border border-main select-none focus-ring",
			"bg-control hover:bg-control-hover active:bg-control-active",
			className,
		),
	overlay: (className?: string) => cn("fixed inset-0 bg-black/50 backdrop-blur-sm", className),
	content: (className?: string) =>
		cn(
			"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
			"w-full max-w-md p-6 rounded-lg",
			"bg-surface-3 border border-main elevation-2",
			className,
		),
};

// ============================ Motion Variants ============================

const overlayVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const contentVariants: Variants = {
	initial: { opacity: 0, scale: 0.95, y: 20 },
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.25 },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		y: 20,
		transition: { duration: 0.2 },
	},
};

// ============================ Component ============================

function Modal({ trigger, children, classNames }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className={styles.trigger(classNames?.trigger)}>{trigger}</button>
			</Dialog.Trigger>

			<AnimatePresence>
				{open && (
					<Dialog.Portal forceMount>
						<Dialog.Overlay asChild forceMount>
							<MotionDiv v={overlayVariants} className={styles.overlay(classNames?.overlay)} />
						</Dialog.Overlay>

						<Dialog.Content asChild forceMount title="title">
							<MotionDiv v={contentVariants} className={styles.content(classNames?.content)}>
								{children}
							</MotionDiv>
						</Dialog.Content>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</Dialog.Root>
	);
}

export default Modal;
