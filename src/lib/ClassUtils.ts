import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge Tailwind CSS classes.
 * Uses `clsx` for conditional class composition and `twMerge` to resolve conflicts.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
