import { useState } from "react";
import { Link } from "react-router";
import '../unique-css/Projects.css';

function ProjectCard({ project, setIsHovered, setCardHovered }) {
    const [isHidden, setIsHidden] = useState(true);

    function handleHoverIn() {
        setIsHovered(true);
        setCardHovered(project.title);
        setIsHidden(false);
    };

    function handleHoverOut() {
        setIsHovered(false);
        setCardHovered(null);
        setIsHidden(true);
    };

     return (
        <div 
            className="project-card" 
            onMouseEnter={handleHoverIn} 
            onMouseLeave={handleHoverOut}
        >
            <div className="project-card-inner">
                <Link to={`/projects/${project.title}`}>
                <div className="project-image-container" >
                    <img src={project.assets[0]} alt={project.title} className="project-image"/>
                    <div className="project-overlay">
                        <span className="view-project">{project.title}</span>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;