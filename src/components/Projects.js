import React from "react"
import { projectData } from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="projects--section">
            <h1>Projects</h1>
            <div className="projects--container">
                <div className="projects--cards">
                    {projectData.map((project) => (
                        <div className="card" key={project.id}>
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <a href={project.link}>
                                    <button className="projects--button" type="submit">Learn More</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects