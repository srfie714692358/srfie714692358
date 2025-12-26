import { NavLink } from "react-router";
import PAGES from "@/pages";
import { Settings } from "lucide-react";

function Header() {
	return (
		<nav className="w-full bg-[#1a0505]/80 backdrop-blur-md shadow-lg gold-border">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<span className="relative">
						<Settings className="text-[#fbbf24]" />
					</span>
					<div className="hidden md:flex space-x-8">
						{PAGES.map((page) => (
							<NavLink key={page.name} to={page.url} className="nav-link text-red-600">
								{page.name}
							</NavLink>
						))}
					</div>
					<button className="md:hidden text-red-600">
						<i className="fas fa-bars text-2xl"></i>
					</button>
				</div>
			</div>
			<div className="md:hidden hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
					{PAGES.map((page) => (
						<NavLink
							key={page.name}
							to={page.url}
							className="block text-red-600 w-full text-center py-3 border-b border-red-900/30 hover:bg-red-950/30"
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
