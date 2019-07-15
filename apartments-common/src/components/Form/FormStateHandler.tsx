import React, { useEffect, useState } from 'react';
import { FormData } from './models/FormData.type';
import { FormConrolMap } from './models/FormControlMap';

const useFormStateHandler = (controlProps: FormConrolMap): any => {

    const [formState, setFormState] = useState<FormData>({});
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        initialiseState();
    }, []);

    useEffect(() => {
        setIsValid(isFormValid());
    }, [formState])

    const initialiseState = () => {
        const initialState = {};
        Object.keys(controlProps).map(controlName => {
            initialState[controlName] = {
                value: '',
                touched: false,
                errors: getFieldValidationErrors(controlName, '')
            }
        });
        setFormState(initialState);
    }

    const handleOnChange = ({ target }): void => {
        const updatedProps = {
            value: target.value,
            errors: getFieldValidationErrors(target.name, target.value)
        }
        updateFieldState(target, updatedProps);
    }

    const handleOnBlur = ({ target }): void => {
        updateFieldState(target, { touched: true });
    }

    const updateFieldState = (target, updatedProps: any) => {
        const updatedField = {
            [target.name]: {
                ...formState[target.name],
                ...updatedProps
            }
        }
        setFormState({ ...formState, ...updatedField });
    }

    const getFieldValidationErrors = (fieldName: string, value) => {
        const props = controlProps[fieldName];
        let fieldErrors;
        if (props.validators && props.validators.length) {
            const errors = props.validators.map(validator => validator(value));
            fieldErrors = errors.reduce((acc, error) => {
                if (error) {
                    return { ...acc, ...error };
                }
            });
        }
        return fieldErrors;
    }

    const isFormValid = () => {
        return !Object.keys(formState).find(fieldName => {
            return formState[fieldName].errors;
        });
    }

    return {
        formState,
        isValid,
        handleOnChange,
        handleOnBlur
    };

}

export default useFormStateHandler;