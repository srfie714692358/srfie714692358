import type { ChangeEvent, ReactNode } from "react";

export type RenderProps = {
	id: string;
	name: string;
	className: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	value?: string;
	required: boolean;
};

export interface FieldProps {
	title: string;
	children: (props: RenderProps) => ReactNode;
	onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	value?: string;
	required?: boolean;
	hasError?: boolean;
}
