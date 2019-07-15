import { FormControlTypes } from "../enums/formControlTypes";
import { FormFieldConfig } from "./FormFiledConfig";

export type FormControlProps = {
        controlType: FormControlTypes,
        labelText: string;
        elementConfig: FormFieldConfig,
        changeHandler?: (any) => void,
        validators?: any[]
};