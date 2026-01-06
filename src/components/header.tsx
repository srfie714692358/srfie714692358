import { NavLink } from "react-router";
import pages from "@/pages";
import { MenuIcon, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/ClassUtils";

function Header() {
	const [hideMenu, setHideMenu] = useState(true);
	const navbar = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				navbar.current &&
				!navbar.current.contains(e.target as Node) &&
				!(e.target as Element).closest("button") /* ignore hamburger */
			) {
				setHideMenu(true);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<nav ref={navbar} className="w-full bg-[#1a0505]/80 backdrop-blur-md shadow-lg gold-border">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<span className="relative">
						<Settings className="text-[#fbbf24]" />
					</span>
					<div className="hidden md:flex space-x-8">
						{pages.map((page) => (
							<NavLink key={page.name} to={page.url} className="nav-link text-red-600">
								{page.name}
							</NavLink>
						))}
					</div>
					<button className="md:hidden text-red-600" onClick={() => setHideMenu((v) => !v)}>
						<MenuIcon />
					</button>
				</div>
			</div>
			<div className={cn("md:hidden", hideMenu && "hidden")}>
				<div className="px-2 pt-2 sm:px-3 flex flex-col items-center">
					{pages.map((page) => (
						<NavLink
							key={page.name}
							to={page.url}
							className="block text-red-600 w-full text-center py-3 border-b border-red-900/30 hover:bg-red-950/30"
							onClick={() => setHideMenu(true)}
						>
							{page.name}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Header;
