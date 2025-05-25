import pedalOutIcon from "../assets/projects/pedal-out/homepage.png";
import ncNewsIcon from "../assets/projects/nc-news/article.png";
import { useState } from "react";
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
                <div className="project-image-container">
                    { project.title === "Pedal Out" ? <img src={pedaloutTile} alt={project.title} className="project-image"/> : null }
                    { project.title === "NC News" ? <img src={ncNewsTile} alt={project.title} className="project-image"/> : null }
                    <div className="project-overlay">
                        <span className="view-project">{project.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;