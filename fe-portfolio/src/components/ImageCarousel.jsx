import { Carousel } from "react-bootstrap";
import "../unique-css/Single-Project.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import { useState } from "react";

function ImageCarousel({ images }) {
    const [slide, setSlide] = useState(0);

    function nextSlide() {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    function prevSlide() {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {images.map((image, index) => {
                return <img src={image} alt={`Slide ${index}`} key={index} className={slide === index ? "slide" : "slide slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicator-container">
                {images.map((_, index) => {
                    return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    )
}

export default ImageCarousel;