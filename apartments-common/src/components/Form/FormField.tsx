import React from 'react';
import { FormControlTypes } from './enums/formControlTypes';

const FormField = ({controlProps, handleOnChange, handleOnBlur}): JSX.Element => {

    const props = {
        onChange: (event) => {
            handleOnChange(event)
            controlProps.changeHandler && controlProps.changeHandler(event.target.value)
        },
        onBlur: (event) => handleOnBlur(event),
        ...controlProps.elementConfig
    }

    const controls = {
        [FormControlTypes.Input]: <input {...props} />,
        [FormControlTypes.TextArea]: <textarea {...props} />
    }

    return controls[controlProps.controlType];
}

export default FormField;