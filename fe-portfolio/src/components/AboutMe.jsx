import { useState } from "react";
import favicon from "../assets/favicon.png";
import profile from "../assets/profile-picture.jpeg";
import "../unique-css/AboutMe.css";

function AboutMe() {
    const [buttonClicked, setButtonClicked] = useState(0);

    function handleButtonClick(choice) {
        if(choice === 1) {
            setButtonClicked(1);
        } else if(choice === 2) {
            setButtonClicked(2);
        } else if(choice === 3) {
            setButtonClicked(3);
        }
    }

    return (
        <div className="about-me-container">
            <div className="page-header">
                <h2 className="page-title">ABOUT ME</h2>
                <div className="button-container">
                    <button className="about-me-button" onClick={() => handleButtonClick(1)}>who am i?</button>
                    <button className="about-me-button" onClick={() => handleButtonClick(2)}>experience</button>
                    <button className="about-me-button" onClick={() => handleButtonClick(3)}>passions</button>
                </div>
            </div>
            <div className="about-me-assets">
                <div className="image-collage">
                    <img className="profile-picture" alt="liv motley" src={profile}/>
                    <div className="about-me-overlay">
                        <img className="static-flower" alt="flower logo" src={favicon}/>
                    </div>
                </div>
                <div className="description-container">
                    { buttonClicked === 0 ? <p className="page-description">Hello - I'm Liv. Click the tabs above to discover more about me, my work and the things that make me tick.</p> : null }
                    { buttonClicked === 1 ? <p className="page-description">Description for first button that has been shown</p> : null }
                    { buttonClicked === 2 ? <p className="page-description">Description for second button that has been shown</p> : null }
                    { buttonClicked === 3 ? <p className="page-description">Description for third button that has been shown</p> : null }
                </div>
            </div>
        </div>
    )
}

export default AboutMe;