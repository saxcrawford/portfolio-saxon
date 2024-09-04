import React from "react"
import { projectData } from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="projects--section">
            <h1>Projects</h1>
            <div className="projects--container">
                <div className="projects--cards">
                    {projectData.map((project) => (
                        <div className="card" key={project.id}
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover', // To cover the entire card
                                backgroundPosition: 'center', // To center the image
                                backgroundRepeat: 'no-repeat', // To avoid repeating the image
                        }}
                        >
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <a
                                className="projects--image-attribution"
                                href={project.attribution.url}
                                aria-label={`Photo by ${project.attribution.author}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Photo by {project.attribution.author}
                            </a>
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