import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

// === Pages

    function Contact() {    

        return (
            <div className="page-wrapper">
                <div className="main-container contact-page">
                    <form className="contact-form">
                        <h2>Contact</h2>
                        <input 
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            className="contact-input"
                            required
                        />
                        <input 
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            className="contact-input"
                            required
                        />
                        <div className="flex column-gap">
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="contact-input"
                                required
                            />
                            <div className="flex">
                                <input 
                                    type="radio"
                                    id="subscribe"
                                    name="subscribe"
                                    className="radio-input"
                                    required
                                />
                                <label for="subscribe">sign up for my newsletter</label>
                            </div>    
                        </div>
                        <textarea 
                            type="textarea"
                            placeholder="Write to me"
                            name="message"
                            required
                        />
                        <div className="contact-bttn-container">
                            <button className="contact-bttn">Send</button>
                        </div>
                    </form>
                </div>
            </div>           
        );       
    }
    
    export default Contact;