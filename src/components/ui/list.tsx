import { AnimatePresence, type Variants } from "framer-motion";
import { MotionLI, MotionUL } from "@/components/provider";
import { cn } from "@/shared/utils/cn";
import { type ReactNode } from "react";

// ============================ Types ============================

interface ListItem {
	content: ReactNode;
	url?: string;
	active?: boolean;
	disable?: boolean;
	action?: () => void;
}

interface Props {
	items?: ListItem[];
	variants?: { list?: Variants; item?: Variants };
	classNames?: {
		container?: string;
		item?: string;
	};
}

// ============================ Styles ============================

const styles = {
	container: (className?: string) =>
		cn("z-toast p-3", "rounded-md elevation-2", "border border-main bg-surface-3 space-y-1", className),

	item: (active?: boolean, disable?: boolean, className?: string) =>
		cn(
			"block px-3 py-2 min-w-40 rounded cursor-pointer",
			"text-sm text-secondary hover:text-primary whitespace-nowrap",
			"bg-surface-4 focus:bg-surface-4 state-hover transition-colors",
			"state-hover focus:outline-0 border border-main",
			active && "cursor-default selected state-active",
			disable && "state-disabled",
			className,
		),
};

// ============================ Motion Variants ============================

const listVariants: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants: Variants = {
	initial: { opacity: 0, x: -10 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		transition: { duration: 0.2 },
	},
};

// ============================ Component ============================

function List({ items, classNames, variants }: Props) {
	return (
		<AnimatePresence mode="popLayout">
			<MotionUL v={variants?.list || listVariants} className={styles.container(classNames?.container)}>
				{items?.map((item, ind) => (
					<MotionLI key={ind} layout v={variants?.item || itemVariants}>
						<a
							href={item.url}
							onClick={item.action}
							className={styles.item(item.active, item.disable, classNames?.item)}
						>
							{item.content}
						</a>
					</MotionLI>
				))}
			</MotionUL>
		</AnimatePresence>
	);
}

export default List;
