import { FormControlProps } from "./FormControlProps";
import { FormData } from "./FormData.type";
import { FormConrolMap } from "./FormControlMap";

export type FormProps = {
    controlProps: FormConrolMap,
    submitHandler: (/*formData: FormData*/ any) => void,
    formChangeHandler?: (formData: FormData) => void
}