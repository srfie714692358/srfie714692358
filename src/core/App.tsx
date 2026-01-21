import Footer from "@/components/footer";
import Header from "@/components/header";
import pages from "@/pages";
import { Route, Routes, useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";
import PageLayout from "@/components/motion/pageLayout";

function App() {
	const location = useLocation();

	return (
		<div className="bg-[#1a0505] min-h-screen text-white">
			<Header className="fixed w-full z-50" />

			<main className="grow min-h-screen p-5 md:p-10 xl:p-20 flex items-center">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						{pages.map((page) => (
							<Route
								key={page.name}
								path={page.url}
								index={page.index}
								element={
									<PageLayout>
										<page.component />
									</PageLayout>
								}
							/>
						))}
					</Routes>
				</AnimatePresence>
			</main>

			<footer className="bg-[#1a0505] gold-border text-white py-8">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
