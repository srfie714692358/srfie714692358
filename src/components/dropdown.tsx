import { list, listItem } from "@/animations/components/dropdown";
import { cn } from "@/lib/classUtils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const listStyle = cn("z-50 p-2 min-w-max border border-amber-500/30 rounded-lg", "bg-[#1a0505] shadow-xl");
const titleStyle = cn(
	"px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer",
	"gold-sharp text-amber-400 border border-amber-500/30 select-none",
	"hover:bg-amber-500/10 transition-colors duration-500"
);
const linkStyle = cn(
	"block px-3 py-2 min-w-40 rounded",
	"text-sm text-slate-300 hover:text-amber-400 whitespace-nowrap",
	"bg-[#250707] hover:bg-[#2c0909] transition-colors"
);

function Dropdown({ title, items }: { title: string; items: { name: string; url: string }[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<div
			className="relative"
			onMouseEnter={() => !isMobile && setIsOpen(true)}
			onMouseLeave={() => !isMobile && setIsOpen(false)}
		>
			<span className={titleStyle} onClick={() => isMobile && setIsOpen((prev) => !prev)}>
				{title}
			</span>

			<AnimatePresence mode="wait">
				{isOpen && (
					<>
						{isMobile ? (
							<MobileContent items={items} onClose={() => setIsOpen(false)} />
						) : (
							<DesktopContent items={items} />
						)}
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

function DesktopContent({ items }: { items: { name: string; url: string }[] }) {
	return (
		<motion.ul
			variants={list}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 1 }}
			className={cn(listStyle, "absolute mt-3")}
		>
			{items.map((item) => (
				<motion.li variants={listItem} key={item.name} className="mb-1 last:mb-0">
					<a href={item.url} target="_blank" className={linkStyle}>
						{item.name}
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
}

function MobileContent({ items, onClose }: { items: { name: string; url: string }[]; onClose: () => void }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
			/>
			<motion.div
				variants={list}
				initial="initial"
				animate="animate"
				exit="exit"
				className={cn(listStyle, "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm")}
			>
				{items.map((item) => (
					<motion.li variants={listItem} key={item.name} className="mb-1 last:mb-0">
						<a href={item.url} target="_blank" className={linkStyle} onClick={onClose}>
							{item.name}
						</a>
					</motion.li>
				))}
			</motion.div>
		</>
	);
}

export default Dropdown;
