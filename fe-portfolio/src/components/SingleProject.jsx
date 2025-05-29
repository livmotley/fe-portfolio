import { Link, useNavigate, useParams } from "react-router";
import { getProjectByTitle } from "../api";
import { useEffect, useState } from "react";
import "../unique-css/Single-Project.css";
import ImageCarousel from "./ImageCarousel";
import { IoIosArrowBack } from "react-icons/io";


function SingleProject() {
    const { title } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
                setIsLoading(true);
                setIsError(false);
                getProjectByTitle(title)
                .then((response) => {
                    setProject(response.data.project);
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

    if(isLoading) return <p className="loading-container">Project pending...</p>
    if(isError) return <p className="error-container">Sorry! Error loading the project. Please refresh.</p>
    if (!project) return <p className="error-container">Project not found</p >;


    return (
        <div className="single-project-container">
            <div className="project-header">
                <div className="title-section">
                    <button className="back-button" onClick={(() => navigate(-1))}><IoIosArrowBack className="back-icon"/> All Projects</button>
                    <h2 className="page-title">{project.title}</h2>
                </div>
                <div className="tech-stack-container">
                    {project.tech_stack.map((tech) => {
                        return <p key={tech} className="tech-name">{tech}</p>
                    })}
                </div>
            </div>
            <div className="project-content">
                <div className="project-assets">
                    <ImageCarousel assets={project.assets}/>
                </div>
                <div className="project-details">
                    <p className="project-description">{project.description}</p>
                    {project.github_link_two ? (
                        <div className="github-links-container">
                            <Link to={project.github_link_one} className="github-link">GitHub Link: BE</Link>
                            <Link to={project.github_link_two} className="github-link">GitHub Link: FE</Link>
                        </div> ) : (
                            <Link to={project.github_link_one} className="github-link">GitHub Link</Link>)}
                </div>
            </div>
        </div>
    )
}

export default SingleProject;