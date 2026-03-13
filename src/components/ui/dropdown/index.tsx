import { AnimatePresence } from "framer-motion";

import { MotionLI, MotionUL } from "@/components/provider";
import Blur from "@/components/ui/blur";

import type { PopoverProps, DropdownProps } from "./type";
import { dropdownStyles as styles } from "./style";
import { list, listItem } from "./motion";

import { cn } from "@/shared/utils/cn";
import { useClickOutOfEle } from "@/shared/hooks/useClickOutOfEle";
import { useMediaQuery } from "@/shared/hooks";

function Dropdown(props: DropdownProps) {
	const { ref, closed, open, close, toggle } = useClickOutOfEle<HTMLDivElement>();
	const isMediumDevice = useMediaQuery("md");
	const onEnter = () => !isMediumDevice && open();
	const onLeave = () => !isMediumDevice && close();

	return (
		<div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}>
			<MainBtn text={props.text} onClick={() => isMediumDevice && toggle()} />
			<AnimatePresence mode="wait">
				{!closed && <Popover onClose={close} isMedium={isMediumDevice} {...props} />}
			</AnimatePresence>
		</div>
	);
}

function MainBtn({ text, onClick }: { text: string; onClick: () => void }) {
	return (
		<span className={styles.mainBtn} onClick={onClick}>
			{text}
		</span>
	);
}

function Popover({ items, active, position, onClose, isMedium }: PopoverProps) {
	const containerStyle = cn(styles.container(isMedium), position && position(isMedium));
	return (
		<>
			{isMedium && <Blur onClick={onClose} />}
			<MotionUL v={list} className={containerStyle}>
				{items.map((item) => (
					<MotionLI v={listItem} key={item.name} className="mb-1 last:mb-0" useDefault>
						<a
							href={item.url}
							onClick={item.action}
							target="_blank"
							className={styles.item(active == item.name)}
						>
							{item.name}
						</a>
					</MotionLI>
				))}
			</MotionUL>
		</>
	);
}

export default Dropdown;
