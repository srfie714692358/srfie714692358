import { type ReactNode } from "react";
import { cn } from "@/shared/utils/cn";
import Dialog from "./dialog";
import type { Variants } from "framer-motion";

// ============================ Types ============================

interface Props {
	title?: string;
	trigger?: ReactNode;
	children?: ReactNode;
	open?: boolean;
	onOpenChange?: (prev?: boolean, next?: boolean) => void | boolean;
	variants?: { overlay?: Variants; content?: Variants };
	classNames?: {
		trigger?: string;
		overlay?: string;
		content?: string;
	};
}

// ============================ Component ============================

function Modal(props: Props) {
	return (
		<Dialog
			{...props}
			overlay
			classNames={{
				...props.classNames,
				overlay: cn("fixed inset-0 bg-black/50 backdrop-blur-sm", props.classNames?.overlay),
			}}
		/>
	);
}

export default Modal;
