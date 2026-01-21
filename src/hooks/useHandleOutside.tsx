import { useEffect, useRef, useState } from "react";

function useHandleOutside() {
	const [hide, setHide] = useState(true);
	const element = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				element.current &&
				!element.current.contains(e.target as Node) &&
				!(e.target as Element).closest("button") /* ignore hamburger */
			) {
				setHide(true);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);
	return { element, hide, setHide };
}

export default useHandleOutside;
