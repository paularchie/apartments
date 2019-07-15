import React from 'react';

import './ContactForm.scss';
import Form from '../Form/Form';
import { FormControlTypes } from '../Form/enums/formControlTypes';
import { FormData } from '../Form/models/FormData.type';
import { required, email } from '../Form/validators';
import { FormConrolMap } from '../Form/models/FormControlMap';


const ContactForm = (): JSX.Element => {

    const ContactFormProps: FormConrolMap = {
        name: {
            controlType: FormControlTypes.Input,
            labelText: 'Name',
            elementConfig: {
                type: 'text',
                id: 'name',
                name: 'name'
            },
            validators: [required]
        },
        email: {
            controlType: FormControlTypes.Input,
            labelText: 'Email',
            elementConfig: {
                type: 'text',
                id: 'email',
                name: 'email'
            },
            validators: [required, email]
        },
        message: {
            controlType: FormControlTypes.TextArea,
            labelText: 'Message',
            elementConfig: {
                rows: 10,
                id: 'message',
                name: 'message'
            },
            validators: [required]
        }
    };

    const handleSubmit = (formData: FormData) => {
        event.preventDefault();
        console.log('form data to be send to the back end', formData)
    }

    return (
        <>
            <div className="contact-form-container">
                <div className="contact-form">
                    <h1 className="contact-form-header">Contact us</h1>
                    <Form
                        controlProps={ContactFormProps}
                        submitHandler={handleSubmit}
                        formChangeHandler={(state) => console.log('123', state)}
                    />
                </div>
            </div>
        </>
    )
}

export default ContactForm;