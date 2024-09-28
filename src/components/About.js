import React from "react"
import capIcon from '../icons/Cap.svg'
import coding from '../images/coding.png'
import lang from '../images/coding-language.png'

function About() {
    return (
        <section id="about" className="about--container">
            <h1>About Me</h1>
            <h4>Who am I?</h4>
            <div className="about--flex">
                <div className="about--content">
                    <p className="about--content-left">
                        My name is Saxon Crawford and I am an aspiring IT professional with a strong
                        passion for technology and computers. I have foundational knowledge in basic
                        software development and web development which have given me a solid understanding
                        of how technologies work and thrive in the digital world. I am eager to expand my skills
                        in areas such as IT, software development, web development, etc. I'm excited to 
                        take on new opportunities that allow me to continue learning, grow my technical skills, and contribute to innovative solutions.
                    </p>
                    <div className="about--content-right">
                        <img className="right-content capIcon" src={capIcon} alt="Graduation Cap"/>
                        <h3>Education</h3>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <div className="about--icons">
                            <a href="https://www.flaticon.com/free-icons/development" title="development icons"><img className="about--dev-icon" src={coding} alt="development icons"/></a>
                            <a href="https://www.flaticon.com/free-icons/coding" title="coding icons"><img className="about--dev-icon" src={lang} alt="coding icons"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About