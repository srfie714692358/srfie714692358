import { useLocation, useRoutes } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useStore } from "zustand";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page";
import MessageBox from "@/components/feature/messageBox";

import { routes } from "./routes";
import { cn } from "@/shared/utils/cn";
import { useThemeStore } from "@/store/useThemeStore";
import { useClearMessagesOnRouteChange } from "@/shared/hooks";

function App() {
	useClearMessagesOnRouteChange();
	const theme = useStore(useThemeStore).theme;
	const location = useLocation();
	const element = useRoutes(routes);
	const style = cn(
		"relative min-h-screen bg-(--color-bg-page)",
		"transition-colors duration-400",
		"text-primary",
		theme,
	);

	return (
		<div className={style}>
			<MessageBox />
			<Header />
			<AnimatePresence mode="wait">
				<PageLayout key={location.pathname}>{element}</PageLayout>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
