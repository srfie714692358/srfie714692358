import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, type Variants } from "framer-motion";
import { MotionDiv } from "@/components/provider";
import { useCallback, useState, type ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

// ============================ Types ============================

interface Props {
	title?: string;
	trigger?: ReactNode;
	children?: ReactNode;
	overlay?: ReactNode;
	open?: boolean;
	onOpenChange?: (prev?: boolean, next?: boolean) => void | boolean;
	variants?: { overlay?: Variants | null; content?: Variants | null };
	classNames?: {
		trigger?: string;
		title?: string;
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
	title: (className?: string) => cn("m-2.5 p-1 text-lg font-semibold", "border-b border-main", className),
	content: (className?: string) =>
		cn(
			"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
			"w-full max-w-md p-6 rounded-lg z-toast",
			"bg-surface-3 border border-main elevation-2",
			className,
		),
};

// ============================ Motion Variants ============================

const variants = {
	overlay: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
	content: {
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
	},
};

// ============================ Component ============================

function Dialog(props: Props) {
	const [isOpen, setOpen] = useState(false);
	const open = props.open !== undefined ? props.open : isOpen;
	const onOpenChange = useCallback(
		(state: boolean) => {
			setOpen((prev) => props.onOpenChange?.(prev, state) ?? state);
		},
		[props],
	);

	return (
		<DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
			<DialogPrimitive.Trigger asChild>
				<button className={styles.trigger(props.classNames?.trigger)}>{props.trigger}</button>
			</DialogPrimitive.Trigger>

			<AnimatePresence mode="wait">
				{open && (
					<DialogPrimitive.Portal forceMount>
						{props.overlay && (
							<DialogPrimitive.Overlay asChild forceMount>
								<MotionDiv
									v={props.variants?.overlay || variants.overlay}
									className={props.classNames?.overlay}
								>
									{props.overlay}
								</MotionDiv>
							</DialogPrimitive.Overlay>
						)}

						<DialogPrimitive.Content asChild forceMount>
							<MotionDiv
								v={props.variants?.content || variants.content}
								className={styles.content(props.classNames?.content)}
							>
								<DialogPrimitive.Title
									className={props.title && styles.title(props.classNames?.title)}
								>
									{props.title}
								</DialogPrimitive.Title>
								{props.children}
							</MotionDiv>
						</DialogPrimitive.Content>
					</DialogPrimitive.Portal>
				)}
			</AnimatePresence>
		</DialogPrimitive.Root>
	);
}

export default Dialog;
