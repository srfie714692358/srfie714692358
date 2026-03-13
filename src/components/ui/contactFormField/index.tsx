import { MotionDiv } from "@/components/provider";

import { fieldVariants } from "@/shared/motion/feature/form";
import { fieldStyles as styles } from "./style";
import type { FieldProps } from "./type";

function Field({ title, children, onChange, value, hasError, required = true }: FieldProps) {
	const fieldName = title.toLowerCase().replace(/\s+/g, "-");
	const props = {
		id: fieldName,
		name: fieldName,
		className: styles.field(hasError),
		required,
		placeholder: `Please enter your ${title.toLowerCase()}`,
		onChange,
		value,
	};

	return (
		<MotionDiv v={fieldVariants} className={styles.container(hasError)} useDefault>
			<label htmlFor={fieldName}>
				{title} {required && <span className="text-(--color-text-error)">*</span>}
			</label>
			{children(props)}
		</MotionDiv>
	);
}

export default Field;
