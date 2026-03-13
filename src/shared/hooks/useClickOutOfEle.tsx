import { useEffect, useRef, useState } from "react";

export function useClickOutOfEle<ElementT extends HTMLElement>() {
	const [closed, setClosed] = useState(true);
	const ref = useRef<ElementT>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setClosed(true);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [ref]);

	const open = () => setClosed(false);
	const close = () => setClosed(true);
	const toggle = () => setClosed((prev) => !prev);

	return { ref, closed, open, close, toggle };
}

