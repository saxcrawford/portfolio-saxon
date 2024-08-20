import React from "react"

function openMailApplication() {
    window.location.href = 'mailto:saxon.crawford@icloud.com';
}

function Hero() {
    return (
        <section id="home" className="hero--container">
            <div className="hero--text">
                <h1 className="hero--heading">Hi, I’m Saxon Crawford</h1>
                <h4>An entry-level computer science graduate ready to make a change</h4>
                <button onClick={openMailApplication} className="hero--button">Contact Me</button>
            </div>
        </section>
    )
}

export default Hero