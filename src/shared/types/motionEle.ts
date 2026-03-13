import type { HTMLElements, HTMLMotionProps, Variants } from "framer-motion";

export type MotionEleProps<T extends keyof HTMLElements> = HTMLMotionProps<T> & {
	children?: React.ReactNode;
	v?: Variants;
	i?: string;
	a?: string;
	e?: string;
	useDefault?: boolean;
};

export type RenderEle<R, T extends keyof HTMLElements> = React.ForwardRefRenderFunction<R, MotionEleProps<T>>;

export type MotionTagType<T extends keyof HTMLElements> = React.ComponentType<MotionEleProps<T>>;
