import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMessageStore } from "@/store/useMessageStore";

export function useClearMessagesOnRouteChange() {
	const location = useLocation();
	const clear = useMessageStore((state) => state.clear);

	useEffect(() => {
		clear();
	}, [location.pathname, clear]);
}
