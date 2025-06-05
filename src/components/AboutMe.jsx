import { useState } from "react";
import favicon from "../assets/favicon.png";
import profile from "../assets/profile-picture.jpeg";
import "../unique-css/AboutMe.css";

function AboutMe() {
  const [buttonClicked, setButtonClicked] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  function handleButtonClick(choice) {
    setInitialLoad(false);
    if (choice === 1) {
      setButtonClicked(1);
    } else if (choice === 2) {
      setButtonClicked(2);
    } else if (choice === 3) {
      setButtonClicked(3);
    }
  }

  return (
    <div className="about-me-container">
      <div className="page-header">
        <h2 className="page-title">ABOUT ME</h2>
        <div className="button-container">
          <button
            className={initialLoad ? "first-load-button" : "about-me-button"}
            onClick={() => handleButtonClick(1)}
          >
            who am I?
          </button>
          <button
            className="about-me-button"
            onClick={() => handleButtonClick(2)}
          >
            experience
          </button>
          <button
            className="about-me-button"
            onClick={() => handleButtonClick(3)}
          >
            passions
          </button>
        </div>
      </div>
      <div className="about-me-assets">
        <div className="image-collage">
          <img className="profile-picture" alt="liv motley" src={profile} />
          <div className="about-me-overlay">
            <img className="static-flower" alt="flower logo" src={favicon} />
          </div>
        </div>
        <div className="description-container">
          {buttonClicked === 1 ? (
            <p className="page-description">
              Hello! I'm Liv, a full-stack software developer with a passion for
              building meaningful digital experiences. After five years in
              marketing and influencer management at companies like TikTok and
              SocialChain, I decided to switch careers into software
              development. <br/><br/>I bring a creative eye for design, a deep
              understanding of user experience, and a collaborative nature that
              comes from years of working with cross-functional teams. Now, as a
              developer, I'm channelling these skills into building robust
              applications that not only tackle real issues but also, provide
              users with a sleek and accessible experience.
            </p>
          ) : null}
          {buttonClicked === 2 ? (
            <p className="page-description">
              My career has been a blend of creativity, strategy, and
              increasingly, technology. From earlier in my career as an intern
              at Plum Fintech to building go-to-market strategies at TikTok,
              I've frequently found myself at the intersection of marketing and
              product development. Working directly with UX/UI teams, building
              feedback loops for product iteration, and collaborating with
              engineering teams taught me about the developer mindset, how
              developers work and how to collaborate with them successfully. <br/><br/>I
              expanded my fascination of technology by specialising in the realm
              of blockchain, decentralisation and NFTs for my master’s thesis at
              the University of Edinburgh. Throughout the years, outside of my
              9-5 I delved into software development through online courses but
              at the end of 2024, I committed to switching careers and completed
              a 3-month bootcamp with Northcoders in Software Development. As a
              result, I now possess the key technical skills to build full-stack
              applications across a varied tech stack and understand the
              developer mindset even more so. <br/><br/>This, in conjunction with my
              previous professional experience means I hold a unique position
              where I understand product development from the perspective of
              both the developer and a customer/client-focused marketer. This
              allows me to build better cross-functional relationships based on
              mutual understanding and respect, resulting in more efficient
              sprints and enjoyable experiences for all.
            </p>
          ) : null}
          {buttonClicked === 3 ? (
            <p className="page-description">
              As demonstrated throughout my academic and professional
              experience, I'm incredibly curious about the future of technology
              and how it's reshaping our world. I am fascinated by the
              possibilities that tech and concepts like AI, decentralisation and
              blockchain present. Even more so, I’m keen to explore how such
              technologies can be harnessed to improve the lifestyles of
              less-developed nations and aid innovation for a more sustainable
              future. <br/><br/>Technology, particularly now, can be a polarizing topic. I
              like to immerse myself in conversations that challenge
              conventional thinking around technology, as well as stay on top of
              the latest trends and emerging tech ventures. My curiosity is what
              has driven me to become a software developer – to be a part of the
              conversation I’m already invested in and drive positive change
              through technology.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
