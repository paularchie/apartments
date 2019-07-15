import { useRef, SyntheticEvent } from "react";

import { ContactFormData } from '../../models/ContactForm.type';
import './ContactForm.scss';

const ContactForm = (): JSX.Element => {

    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const messageRef = useRef<HTMLTextAreaElement>();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const formData: ContactFormData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        }
    }

    return (
        <>
            <div className="contact-form-container">
                <div className="contact-form">
                    <h1 className="contact-form-header">Contact us</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                ref={nameRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                ref={emailRef}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                rows={10}
                                id="message"
                                name="message"
                                ref={messageRef}
                            />
                        </div>

                        <button type="submit">Send</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default ContactForm;