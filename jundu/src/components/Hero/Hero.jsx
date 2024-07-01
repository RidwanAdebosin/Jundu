import "./Hero.css";

const Hero = () => {
    return (
        <main className="hero">
        <div className="hero-section-text">
            <h1 className="hero-section-h1">Every purchase will be made with pleasure.
            </h1>
            <span>We work with global brands and have created an application for you to do your shopping.</span>
        </div>
            <div className="hero-section-image">
                <img src="https://media.istockphoto.com/id/891600988/photo/shopping-together-for-all-their-essentials.jpg?s=612x612&w=0&k=20&c=LpNZcFdnN6sv8w-hJgiwd3NXuGWB-NiRQADHcDV3SBs="/>
            </div>
        </main>
    )
}

export default Hero;