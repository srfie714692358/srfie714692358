import { useWindowSize } from "./useWindowSize";

const BREAK_POINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };

export function useBreakpoint() {
	const width = useWindowSize();

	if (width <= BREAK_POINTS.sm) return "sm";
	if (width <= BREAK_POINTS.md) return "md";
	if (width <= BREAK_POINTS.lg) return "lg";
	if (width <= BREAK_POINTS.xl) return "xl";
	if (width <= BREAK_POINTS["2xl"]) return "2xl";

	return "ex";
}
