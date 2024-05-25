import { useState, useEffect } from "react";
import './ImageSlider.css'

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].img})` 
    };

    const sliderStyle = {
        height: "100%", 
        position: "relative"
    };

    const leftArrowStyles = {
        left: "32px",
    };

    const rightArrowStyles = {
        right: "32px",
    };

    function gotToPrevious () {
        var newIndex;
        if(currentIndex === 0){
            newIndex = slides.length - 1;
        }
        else {
            newIndex = currentIndex - 1;
        }
        setCurrentIndex (newIndex);
    }

    function goToNext(){
        var newIndex;
        if(currentIndex === slides.length - 1){
            newIndex = 0;
        } else {
            newIndex = currentIndex + 1;
        }
        setCurrentIndex(newIndex);
    }

    function goToSlide(index){
        setCurrentIndex(index);
    }

    useEffect(() => {
        const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]); 

    return (
        <div style={sliderStyle}>
            <div style = {leftArrowStyles} onClick = {gotToPrevious} className="arrowButton">&#10096;</div>
            <div style = {rightArrowStyles} onClick = {goToNext} className="arrowButton">&#10097;</div>
            <div  className="dotContainer">
                {
                slides.map((slide, slideIndex)=>(
                <div key= {slideIndex} onClick={()=>goToSlide(slideIndex)} className={currentIndex === slideIndex ? "dots active" : "dots"}>•</div>
                ))}
            </div>
            <div style={slideStyles}></div>
        </div>
    );
}
