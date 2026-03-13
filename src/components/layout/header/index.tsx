import { NavLink } from "react-router";

import { MenuIcon } from "lucide-react";
import Settings from "@/components/feature/settings";

import { useClickOutOfEle } from "@/shared/hooks/useClickOutOfEle";
import { list, listItem, listReverse } from "@/shared/motion/list";
import { headerVariants as variants } from "./motion";
import { navigation } from "@/app/navigation";
import { headerStyle as styles } from "./style";
import { MotionDiv, MotionSpan, MotionHeader } from "@/components/provider";
import { AnimatePresence } from "framer-motion";

function Header({ className }: { className?: string }) {
	return (
		<>
			<div className="h-14 md:h-0" />
			<MotionHeader v={variants.header} className={styles.header(className)}>
				<span className="gradient-border before:hidden">
					<Navbar />
				</span>
			</MotionHeader>
		</>
	);
}

function Navbar() {
	const { ref, closed, close, toggle } = useClickOutOfEle<HTMLDivElement>();
	return (
		<MotionDiv v={variants.menu}>
			<div ref={ref} className={styles.navbar}>
				<Settings />
				<DesktopLinks />
				<MenuIcon className="md:hidden" onClick={toggle} />
			</div>
			<MobileLinks closed={closed} close={close} />
		</MotionDiv>
	);
}

function DesktopLinks() {
	return (
		<MotionDiv v={listReverse} className={styles.linkContainer.desktop}>
			{navigation.map((page) => (
				<MotionSpan key={page.label} v={listItem} useDefault>
					<NavLink to={page.path} className={styles.link.desktop}>
						{page.label}
					</NavLink>
				</MotionSpan>
			))}
		</MotionDiv>
	);
}

function MobileLinks({ closed, close }: { closed: boolean; close: () => void }) {
	return (
		<AnimatePresence>
			{!closed && (
				<MotionDiv v={variants.menu} className="md:hidden overflow-hidden">
					<MotionDiv v={list} className={styles.linkContainer.mobile}>
						{navigation.map((page) => (
							<MotionDiv key={page.label} v={listItem} className="w-full">
								<NavLink to={page.path} className={styles.link.mobile} onClick={close}>
									{page.label}
								</NavLink>
							</MotionDiv>
						))}
					</MotionDiv>
				</MotionDiv>
			)}
		</AnimatePresence>
	);
}

export default Header;
