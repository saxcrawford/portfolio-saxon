import React from "react"
import linkedInIcon from "../icons/linkedin.svg"
import githubIcon from "../icons/github.svg"

function openMailApplication() {
    window.location.href = 'mailto:saxon.crawford@icloud.com';
}

function Contact() {
    return (
        <section id="contact" className="contact--container">
            <h1>Any Questions?</h1>
            <h3>Reach me here!</h3>
            <div className="contact--flex">
                <button onClick={openMailApplication} className="contact--button">Contact Me</button>
                <div className="contact--icons">
                    <a href="https://www.linkedin.com/in/saxoncrawford/" target="_blank" aria-label="LinkedIn Profile">
                        <img className="contact--icon" src={linkedInIcon} alt="GitHub Icon"/>
                    </a>
                    <a href="https://github.com/saxcrawford" target="_blank" aria-label="GitHub Profile">
                        <img className="contact--icon" src={githubIcon} alt="GitHub Icon"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact