import { useEffect, useState } from "react";
import "./Hero.css";

const Carousel= ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(()=> {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId)
    },[images.length]);

    return(
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image"/>
        </div>
    )
};



const Hero = () => {
    const images = [
        "https://100pillars.in/wp-content/uploads/2023/04/Building-materials-industry-%E2%80%93-Retrospect-2020-min-600x375.jpg",
        "https://www.nairaland.com/attachments/15661609_2348139462767status79f0856ad7b44c78a44ea46f149c157c_jpegb5cf7d7fd3334f6d698f7fe62ae292b3",
        "https://i.pinimg.com/736x/32/67/be/3267becdceb3beafd1ac856f37d67451.jpg",
        // "https://images.westend61.de/0001226125pw/mixed-race-woman-buying-produce-in-supermarket-BLEF13662.jpg"
    
    ]
    
    return (
        <main className="hero">
        <div className="hero-section-text">
            <h1 className="hero-section-h1">Every purchase of building materials will be made with pleasure and ease.
            </h1>
            <span>We collaborate with global brands to provide a platform where you can easily shop for building materials.</span>
        </div>
            <div className="hero-section-image">
                <Carousel images={images}/>
            </div>
        </main>
    )
}

export default Hero;