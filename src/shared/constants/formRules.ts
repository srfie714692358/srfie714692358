import type { ValidationRule } from "@/shared/types/validation";

export const CONTACT_FORM_RULES: ValidationRule[] = [
    {
        field: "name",
        required: true,
        minLength: 3,
        messages: { required: "Name is required.", min: "Name must be more than two chars." },
    },
    {
        field: "email",
        required: true,
        pattern: /\S+@\S+\.\S+/,
        messages: { required: "Email is required.", invalid: "Please enter a valid email." },
    },
    {
        field: "message",
        required: true,
        minLength: 6,
        messages: { required: "Message can't be empty.", min: "Message should be more than 5 chars." },
    },
];