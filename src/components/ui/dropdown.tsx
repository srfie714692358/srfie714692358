import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, type Variants } from "framer-motion";
import { MotionLI, MotionUL } from "@/components/provider";

import { useCallback, useState, type ReactNode } from "react";
import { cn } from "@/shared/utils/cn";
import { ChevronDown } from "lucide-react";

//  ============================== Types ====================================
interface Props {
	trigger: ReactNode;
	align?: "end" | "center" | "start";
	side?: "bottom" | "left" | "right" | "top";
	sideOffset?: number;
	alignOffset?: number;
	open?: boolean;
	onOpenChange?: (prev?: boolean, next?: boolean) => void | boolean;
	items: {
		content: string;
		url?: string;
		action?: () => void;
		active?: boolean;
		disable?: boolean;
	}[];
	classNames?: { trigger?: string; container?: string; item?: string };
}

//  ============================== Styles ====================================
const styles = {
	trigger: (className?: string) =>
		cn(
			"px-4 py-1.5 rounded-full text-xs font-medium",
			"border border-main select-none focus-ring",
			"bg-control hover:bg-control-hover active:bg-control-active",
			className,
		),
	container: (className?: string) =>
		cn("z-toast p-3", "rounded-md elevation-2", "border border-main bg-surface-3", className),
	item: (active?: boolean, disable?: boolean, className?: string) =>
		cn(
			"block px-3 py-2 min-w-40 rounded cursor-pointer",
			"text-sm text-secondary hover:text-primary whitespace-nowrap",
			"bg-surface-4 focus:bg-surface-4 state-hover transition-colors",
			"state-hover focus:outline-0",
			active && "cursor-default selected state-active",
			disable && "state-disabled",
			className,
		),
};

//  ============================ Motion Variants ================================
const listVariants: Variants = {
	initial: {
		opacity: 0,
		height: 0,
		y: 10,
		overflow: "hidden",
	},
	animate: {
		opacity: 1,
		height: "auto",
		y: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
			height: { duration: 0.3 },
		},
	},
	exit: {
		opacity: 0,
		height: 0,
		y: 10,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
			when: "afterChildren",
			height: { duration: 0.3, delay: 0.2 },
			delay: 0.2,
		},
	},
};

const itemVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0, transition: { delay: 0.1 } },
};

//  ============================== Components ====================================
function Dropdown(props: Props) {
	const [isOpen, setOpen] = useState(false);
	const open = props.open !== undefined ? props.open : isOpen;
	const onOpenChange = useCallback(
		(state: boolean) => {
			setOpen((prev) => props.onOpenChange?.(prev, state) ?? state);
		},
		[props],
	);
	const onEnter = () => onOpenChange(true);
	const onLeave = () => onOpenChange(false);

	return (
		<DropdownMenu.Root onOpenChange={onOpenChange}>
			<span onMouseEnter={onEnter} onMouseLeave={onLeave}>
				<DropdownMenu.Trigger className={styles.trigger(props.classNames?.trigger)}>
					{props.trigger}
					{typeof props.trigger == "string" && <ChevronDown className="h-4 w-4 inline" />}
				</DropdownMenu.Trigger>

				<AnimatePresence mode="wait">
					{open && (
						<DropdownMenu.Portal forceMount>
							<DropdownMenu.Content
								align={props.align}
								side={props.side}
								sideOffset={props.sideOffset || 8}
								alignOffset={props.alignOffset}
								asChild
							>
								<MotionUL v={listVariants} className={styles.container(props.classNames?.container)}>
									{props.items.map((item, ind) => (
										<DropdownMenu.Item key={ind} asChild>
											<MotionLI v={itemVariants} className="mb-1 last:mb-0">
												<a
													href={item.url}
													target="_blank"
													onClick={item.action}
													className={styles.item(
														item.active,
														item.disable,
														props.classNames?.item,
													)}
												>
													{item.content}
												</a>
											</MotionLI>
										</DropdownMenu.Item>
									))}
								</MotionUL>
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					)}
				</AnimatePresence>
			</span>
		</DropdownMenu.Root>
	);
}

export default Dropdown;
