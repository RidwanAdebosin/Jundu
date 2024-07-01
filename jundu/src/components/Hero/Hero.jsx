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
        "https://media.istockphoto.com/id/891600988/photo/shopping-together-for-all-their-essentials.jpg?s=612x612&w=0&k=20&c=LpNZcFdnN6sv8w-hJgiwd3NXuGWB-NiRQADHcDV3SBs=",
        "https://images.westend61.de/0000859382pw/woman-playing-with-shopping-cart-in-grocery-store-CAIF15602.jpg",
        "https://blogs.kent.ac.uk/staff-student-news/files/2022/12/Kent-23rd-june-9414.jpg"
    
    ]
    
    return (
        <main className="hero">
        <div className="hero-section-text">
            <h1 className="hero-section-h1">Every purchase will be made with pleasure.
            </h1>
            <span>We work with global brands and have created an application for you to do your shopping.</span>
        </div>
            <div className="hero-section-image">
                <Carousel images={images}/>
            </div>
        </main>
    )
}

export default Hero;