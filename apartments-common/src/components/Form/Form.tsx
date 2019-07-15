import React, { useEffect } from 'react';

import './form.scss';
import { FormProps } from './models/FormProps';
import { FormControlProps } from './models/FormControlProps';
import useFormStateHandler from './FormStateHandler';
import FormFieldErrorMessages from './FormFieldErrorMessages';
import FormField from './FormField';


const Form = ({ controlProps, submitHandler, formChangeHandler }: FormProps): JSX.Element => {

    const { formState, isValid, handleOnChange, handleOnBlur } = useFormStateHandler(controlProps);

    useEffect(() => {
        formChangeHandler && formChangeHandler(formState)
    }, [formState])


    const getErrors = (controlName: string) => {
        const errors = formState[controlName] && formState[controlName].errors;
        const isTouched = formState[controlName] && formState[controlName].touched;

        return errors && isTouched
            ? <FormFieldErrorMessages errors={errors} />
            : null
    }

    const getFormValue = () => {
        let formValue = {};
        for (let [fieldName, fieldState] of Object.entries(formState) as any) {
            formValue = {
                ...formValue,
                ...{ [fieldName]: fieldState.value }
            }
        }
        return formValue;
    }

    return (
        <div>
            <form onSubmit={() => submitHandler(getFormValue())}>

                {Object.keys(controlProps).map(controlName => {
                    const props: FormControlProps = controlProps[controlName];

                    return (
                        <div key={props.elementConfig.id} className="form-group">
                            <label htmlFor={props.elementConfig.id}>{props.labelText}</label>

                            <FormField
                                controlProps={props}
                                handleOnChange={handleOnChange}
                                handleOnBlur={handleOnBlur}
                            />

                            {getErrors(controlName)}

                        </div>
                    )
                })}

                <button
                    type="submit"
                    disabled={!isValid}
                >
                    Send
                </button>

            </form>
        </div>
    )
}


export default Form;