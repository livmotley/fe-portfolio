import { useState } from "react";
import { Link } from "react-router";
import "../unique-css/Contact.css";
import { postMessage } from "../api";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";


function Contact() {
    const [messageInput, setMessageInput] = useState({ name: "", body: "", email: "" });
    const [hasSent, setHasSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    function handleSubmit(event) {
        event.preventDefault();
        setHasSent(false);
        setIsLoading(true);
        setIsError(false);
        postMessage(messageInput)
        .then((response) => {
            setMessageInput({ name: "", body: "", email: "" });
            setHasSent(true);
            setIsLoading(false);
            setTimeout(() => setHasSent(false), 3000);
        })
        .catch(() => {
            setIsLoading(false);
            setIsError(true);
            setHasSent(false);
        })
    }

    function handleChange(event) {
        setMessageInput({...messageInput, [event.target.name]: event.target.value});
    }

    if(isLoading) return <p className="loading-container">Thank you! Your message is sending...</p>
    if(isError) return <p className="error-container">Message failed to send, please try again or click the button <br/>on the page to send a direct email instead.</p>

    return (
        <div className="contact-page-container">
            <section className="page-header">
                <h2 className="page-title">GET IN TOUCH</h2>
                <div className="instructions-container">
                    <button className="email-button">send an email</button>
                    <p className="instruction-text">or fill in the form below and I'll get back to you as soon as possible.</p>
                </div>
            </section>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="new-message-form">
                        <label className="form-labels" htmlFor="name">name:</label>
                        <input
                            className="message-form-input"
                            id="name"
                            name="name"
                            type="text"
                            value={messageInput.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required/>
                        <label className="form-labels" htmlFor="email">email:</label>
                        <input
                            className="message-form-input"
                            id="email"
                            name="email"
                            type="text"
                            value={messageInput.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required/>
                        <label className="form-labels" htmlFor="body">message:</label>
                        <textarea
                            className="message-form-input"
                            id="body"
                            name="body"
                            type="text"
                            value={messageInput.body}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            required/>
                    <button
                        className="submit-button"
                        type="submit">send message</button>
                </form>
            </div>
            <div className="social-container">
                <Link to="https://github.com/livmotley" className="social-link" target="_blank">
                    <img src={githubIcon} alt="Liv Motley GitHub Icon" className="social-icon"/>
                    <p className="social-text">View my GitHub</p>
                </Link>
                <Link to="https://www.linkedin.com/in/olivia-motley/" className="social-link" target="_blank">
                    <img src={linkedinIcon} alt="Liv Motley LinkedIn Icon" className="social-icon"/>
                    <p className="social-text">Connect on LinkedIn</p>
                </Link>
            </div>
        </div>
    )
}

export default Contact;