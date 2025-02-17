import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        email.indexOf("@") > -1 &&
        onValidated({
            MERGE0: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }
    

    return (
        <form 
            className=""
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="flex just-center">
                <h3 className="white">
                    {status === "success" 
                        ? "Success!" 
                        : "Join my newsletter"
                    }
                </h3>
            </div>

            {status === "sending" && (
                <div className="flex just-center white">
                    <p>sending...</p>
                </div>
            )}

            {status === "error" && (
                <div className="flex just-center white nasalization"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status === "success" && (
                <div
                className="flex just-center white nasalization"
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="flex mobile-column just-center space-btwn">
                    <input 
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="First name"
                    />
                    <input 
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Last name"
                    />
                    <input 
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email"
                        isRequired
                    />
                </div>
            ) : null}
            
            {status === 'success' ?
                <div></div> : 
                <div className="flex just-center">
                    <input 
                        label="Subscribe"
                        type="submit"
                        formValues={[email, firstName, lastName]}
                    />
                </div>
            }
        </form>
    )
}

export default NewsletterForm;