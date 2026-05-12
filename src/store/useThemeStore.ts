import type { ThemeStore } from "@/shared/types/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set) => ({
			theme: "",
			setTheme: (theme) => {
				document.documentElement.className = theme;
				set({ theme });
			},
		}),
		{
			name: "theme-storage",
			onRehydrateStorage: () => (state) => {
				if (state?.theme) {
					document.documentElement.className = state.theme;
				}
			},
		},
	),
);
