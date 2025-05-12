import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useApiRequest from "../hooks/useApiRequest";
import { getAllProjects } from "../api";
import '../unique-css/Projects.css';
import '../unique-css/Page.css';


function Projects() {
    const [isHovered, setIsHovered] = useState(true);
    const [cardHovered, setCardHovered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //         setIsLoading(true);
    //         setIsError(false);
    //         getAllProjects()
    //         .then((response) => {
    //             setProjects(response.data.projects);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setIsError(true);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, []);

    if(isLoading) return <p className="loading-container">Projects Pending...</p>
    if(isError) return <p className="error-container">Oh no! Something has gone wrong.</p>
    
    return (
        <div className="project-page">
            {/* <section className="projects-gallery">
                {projects.map((project) => {
                    return <ProjectCard key ={project.title} project={project}/>
                })}
            </section> */}
            <section className="project-details">
                <h2 className="page-title">PROJECTS</h2>
                { isHovered ? <p className="page-description">Description goes here when hovered</p> : null }
            </section>
        </div>
    )

}

export default Projects;