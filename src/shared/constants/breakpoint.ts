export const BREAK_POINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

export type BreakPointKey = keyof typeof BREAK_POINTS;