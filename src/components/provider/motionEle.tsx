import type { MotionTagType, RenderEle } from "@/shared/types/motionEle";
import { motion } from "framer-motion";
import type { HTMLElements } from "framer-motion";
import { forwardRef } from "react";

function createMotionEle<T extends keyof HTMLElements, R extends HTMLElement>(tagName: T) {
	const renderEle: RenderEle<R, T> = ({ useDefault = false, ...props }, ref) => {
		const MotionTag = motion[tagName as keyof typeof motion] as MotionTagType<T>;
		return (
			<MotionTag
				ref={ref}
				variants={props.v}
				initial={useDefault ? undefined : props.i || "initial"}
				animate={useDefault ? undefined : props.a || "animate"}
				exit={useDefault ? undefined : props.e || "exit"}
				className={props.className}
				{...props}
			>
				{props.children}
			</MotionTag>
		);
	};

	return forwardRef(renderEle);
}

export const MotionDiv = createMotionEle<"div", HTMLDivElement>("div");
export const MotionHeader = createMotionEle<"header", HTMLDivElement>("header");
export const MotionLI = createMotionEle<"li", HTMLLIElement>("li");
export const MotionSpan = createMotionEle<"span", HTMLSpanElement>("span");
export const MotionUL = createMotionEle<"ul", HTMLUListElement>("ul");
export const MotionA = createMotionEle<"a", HTMLAnchorElement>("a");
export const MotionImg = createMotionEle<"img", HTMLImageElement>("img");
export const MotionH1 = createMotionEle<"h1", HTMLHeadingElement>("h1");
export const MotionP = createMotionEle<"p", HTMLParagraphElement>("p");
export const MotionBtn = createMotionEle<"button", HTMLButtonElement>("button");
export const MotionForm = createMotionEle<"form", HTMLFormElement>("form");
