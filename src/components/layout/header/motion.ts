import type { Variants } from "framer-motion";

interface HeaderVariantsT {
	[key: string]: Variants;
}

export const headerVariants: HeaderVariantsT = {
	header: {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	},

	menu: {
		initial: { height: 0, opacity: 0 },
		animate: {
			height: "auto",
			opacity: 1,
			transition: { duration: 0.8, ease: "easeIn", type: "spring" },
		},
		exit: {
			height: 0,
			opacity: 0,
			transition: { duration: 0.25, ease: "easeOut" },
		},
	},
};
