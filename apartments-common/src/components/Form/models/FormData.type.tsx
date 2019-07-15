export type FormData = {
    [key: string]: {
        value: string,
        touched: boolean,
        errors: {[key: string]: {} | null}
    };
}