import { NavLink } from "react-router";
import pages from "@/pages";
import { MenuIcon, Settings } from "lucide-react";
import useHandleOutside from "@/hooks/useHandleOutside";
import { AnimatePresence, motion } from "framer-motion";
import { list, listItem, listReverse } from "@/animations/list";
import { menuVariants, headerVariants } from "@/animations/components/header";
import { cn } from "@/lib/classUtils";

function Header({ className }: { className?: string }) {
	const { element: header, hide: hideMenu, setHide: setHideMenu } = useHandleOutside();
	const style = cn(className, "w-full bg-[#1a0505]/80 backdrop-blur-md shadow-lg gold-border");

	return (
		<motion.header ref={header} variants={headerVariants} initial="hidden" animate="visible" className={style}>
			<div className="container mx-auto p-4">
				<Navbar setHideMenu={setHideMenu} />
			</div>
			<MobileNavLinks hideMenu={hideMenu} setHideMenu={setHideMenu} />
		</motion.header>
	);
}

function Navbar({ setHideMenu }: { setHideMenu: (v: (prev: boolean) => boolean) => void }) {
	return (
		<div className="flex justify-between items-center">
			<span className="relative">
				<Settings className="text-[#fbbf24]" />
			</span>
			<motion.div variants={listReverse} initial="hidden" animate="visible" className="hidden md:flex space-x-8">
				{pages.map((page) => (
					<motion.span key={page.name} variants={listItem}>
						<NavLink to={page.url} className="nav-link text-red-600">
							{page.name}
						</NavLink>
					</motion.span>
				))}
			</motion.div>
			<button className="md:hidden text-red-600" onClick={() => setHideMenu((v: boolean) => !v)}>
				<MenuIcon />
			</button>
		</div>
	);
}

function MobileNavLinks({ hideMenu, setHideMenu }: { hideMenu: boolean; setHideMenu: (v: boolean) => void }) {
	return (
		<AnimatePresence>
			{!hideMenu && (
				<motion.div
					variants={menuVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="md:hidden overflow-hidden"
				>
					<motion.div
						variants={list}
						initial="hidden"
						animate="visible"
						className="px-2 pt-2 sm:px-3 flex flex-col items-center"
					>
						{pages.map((page) => (
							<motion.span key={page.name} variants={listItem} className="w-full">
								<NavLink
									to={page.url}
									className="block text-red-600 w-full text-center py-3 border-b border-red-900/30 hover:bg-red-950/30"
									onClick={() => setHideMenu(true)}
								>
									{page.name}
								</NavLink>
							</motion.span>
						))}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Header;
