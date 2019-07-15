import { EMAIL_REGEX } from "./constants";

export const required = (value: string): { [key: string]: boolean } => {
    return value && value.trim() ? null : { required: true };
}

export const minLength = (length: number) => {
    return (value: string): { [key: string]: number } => {
        return !value || value.length < length ? { minLength: length } : null;
    }
}

export const email = (value: string): { [key: string]: boolean } | null => {
    return !(new RegExp(EMAIL_REGEX).test(value)) ? { email: true } : null
};