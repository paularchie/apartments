import React from 'react';

const FormFieldErrorMessages = ({errors}): JSX.Element => {

    
    const errorMessages = {
        required: 'Field is required',
        email: 'Please enter a valid email address',
        minLength: `Min length is ${errors.minLength}`
    };

    const hasRequiredError = (errors) => {
        return Object.keys(errors).indexOf('required') > -1;
    }

    return (
        <>
            {
                hasRequiredError(errors)
                    ? <p>{errorMessages['required']}</p>
                    : Object.keys(errors).map(errorType => {
                        return <p key={errorType}>{errorMessages[errorType]}</p>
                    })
            }
        </>
    )
}

export default FormFieldErrorMessages;