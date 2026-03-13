import type { ThemeStore } from "@/shared/types/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set) => ({
			theme: "light",
			setTheme: (v) => set(() => ({ theme: v })),
		}),
		{
			name: "theme-storage",
		},
	),
);
