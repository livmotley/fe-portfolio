import { Carousel } from "react-bootstrap";
import "../unique-css/Single-Project.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

function ImageCarousel({ assets }) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === assets.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? assets.length - 1 : slide - 1);
  }

  const videoRegex = /\.mp4$/i;

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {assets.map((asset, index) => {
        const isVideo = videoRegex.test(asset);
        return isVideo ? (
          <video
            autoPlay
            muted
            playsInline
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          >
            <source src={asset} type="video/webm" />
          </video>
        ) : (
          <img
            src={asset}
            alt={`Slide ${index}`}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicator-container">
        {assets.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default ImageCarousel;
