import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../api";
import '../unique-css/Projects.css';
import '../unique-css/Page.css';


function Projects() {
    const [isHovered, setIsHovered] = useState(true);
    const [cardHovered, setCardHovered] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
            setIsLoading(true);
            setIsError(false);
            getAllProjects()
            .then((response) => {
                setProjects(response.data.projects);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if(isLoading) return <p className="loading-container">Projects Pending...</p>
    if(isError) return <p className="error-container">Oh no! Something has gone wrong.</p>
    
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h2 className="page-title">PROJECTS</h2>
                <p className="page-description">Take a look through some projects that I've worked <br/>on below and click through for more details. Enjoy!</p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => {
                    return <ProjectCard key ={project.title} project={project} setIsHovered={setIsHovered} setCardHovered={setCardHovered}/>
                })}
            </div>
        </div>
    )

}

export default Projects;