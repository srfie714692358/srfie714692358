export type ValidationRule = {
	field: string;
	required?: boolean;
	minLength?: number;
	pattern?: RegExp;
	messages: {
		required?: string;
		min?: string;
		invalid?: string;
	};
};

export type ValidationError = {
	[fieldName: string]: string[];
};
