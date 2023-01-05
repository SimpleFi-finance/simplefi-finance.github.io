import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {MailchimpForm} from './MailchimpForm';

export const Newsletter = () => {
    const url = `https://finance.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <MailchimpForm onSubmitted={formData => subscribe(formData)} status={status} message={message}/>
            )}
        />
    )
}