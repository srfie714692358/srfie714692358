import { useEffect } from "react";

export function useResizeWindow(f: () => void) {
	useEffect(() => {
		f();
		window.addEventListener("resize", f);
		return () => window.removeEventListener("resize", f);
	}, [f]);
}
