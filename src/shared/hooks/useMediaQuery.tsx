import { useWindowSize } from "./useWindowSize";
import { BREAK_POINTS, type BreakPointKey } from "@/shared/constants";

export function useMediaQuery(maxBreakPoint: BreakPointKey) {
	const maxWidth = BREAK_POINTS[maxBreakPoint];
	const width = useWindowSize();
	return width <= maxWidth;
}
