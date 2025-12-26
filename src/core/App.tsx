import Footer from "@/components/footer";
import Header from "@/components/header";
import PAGES from "@/pages";
import { Route, Routes } from "react-router";

function App() {
	return (
		<div className="bg-[#1a0505] min-h-screen text-white">
			<header className="h-fit fixed w-full z-50">
				<Header />
			</header>
			<main className="grow flex items-center justify-center p-24 min-h-screen page-fade-in">
				<Routes>
					{PAGES.map((page) => (
						<Route key={page.name} path={page.url} element={<page.component />} />
					))}
				</Routes>
			</main>

			<footer className="bg-[#1a0505] gold-border text-white py-8">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
