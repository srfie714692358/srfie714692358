export type DropdownProps = {
	text: string;
	items: { name: string; url?: string; action?: () => void }[];
	active?: string;
	position?: (v?: boolean) => string;
};

export type PopoverProps = {
	items: { name: string; url?: string; action?: () => void }[];
	active?: string;
	position?:  (v?: boolean) => string;
	onClose: () => void;
	isMedium?: boolean;
};

