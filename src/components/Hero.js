import React from "react"
import waving from "../images/waving-hand.png"

function openMailApplication() {
    window.location.href = 'mailto:saxon.crawford@icloud.com';
}

function Hero() {
    return (
        <section id="home" className="hero--container">
            <div className="hero--image">
                <a href="https://www.flaticon.com/free-icons/hello" title="Hello icons created by Kalashnyk - Flaticon">
                    <img className="hero--image" src={waving} alt="Waving hand icon created by Kalashnyk - Flaticon" />
                </a>
            </div>
            <div className="hero--text">
                <h1 className="hero--heading">Hi, I’m Saxon Crawford</h1>
                <h4>An entry-level computer science graduate ready to make a change</h4>
                <button onClick={openMailApplication} className="hero--button">Contact Me</button>
            </div>
        </section>
    )
}

export default Hero
