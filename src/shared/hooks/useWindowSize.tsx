import { useState } from "react";
import { useResizeWindow } from ".";

export function useWindowSize() {
	const [width, setWidth] = useState(window.innerWidth);
	useResizeWindow(() => setWidth(window.innerWidth));
	return width;
}
