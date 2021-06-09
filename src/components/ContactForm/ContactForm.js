import React from 'react';
import classes from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <form className={classes.ContactForm} name="contact" method="post">
            <div className={classes.Wrapper}>
                <input type="hidden" name="form-name" value="contact" />

                <label>Your Name:</label>
                <input type="text" name="name" />

                <label>Your Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </div>
        </form>
    );
}
