import React from "react"
import linkedInIcon from "../icons/In-Blue-128.png"
import githubIcon from "../icons/github-mark.png"

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
                    <a href="https://www.linkedin.com/in/saxoncrawford/" target="_blank" aria-label="LinkedIn Profile" rel="noreferrer">
                        <img className="contact--icon" src={linkedInIcon} alt="GitHub Icon"/>
                    </a>
                    <a href="https://github.com/saxcrawford" target="_blank" aria-label="GitHub Profile" rel="noreferrer">
                        <img className="contact--icon" src={githubIcon} alt="GitHub Icon"/>
                    </a>
                </div>
            </div>
            <footer>
                <p>LinkedIn logo used according to <a href="https://brand.linkedin.com/policies" target="_blank" rel="noreferrer">LinkedIn's Brand Guidelines</a></p>
                <p>GitHub logo used according to <a href="https://github.com/logos" target="_blank" rel="noreferrer">GitHub's Branding Guidelines</a></p>
            </footer>
        </section>
    )
}

export default Contact