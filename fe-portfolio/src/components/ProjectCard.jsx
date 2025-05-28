import { useState } from "react";
import { Link } from "react-router";
import '../unique-css/Projects.css';
import ncNewsTile from "../assets/projects/tiles/ncnews-tile.png";
import pedaloutTile from "../assets/projects/tiles/pedalout-tile.png";

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
                    { project.title === "Pedal Out" ? <img src={pedaloutTile} alt={project.title} className="project-image"/> : null }
                    { project.title === "NC News" ? <img src={ncNewsTile} alt={project.title} className="project-image"/> : null }
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