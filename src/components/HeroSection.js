import '../index.css';
import hero_image from "../images/airbnb-hero-image.png"

export default function HeroSection(){
    return(
        <section className='hero--section' >
            <img src={hero_image} alt="" className='hero--image'/>
            <div className='hero--content'>
                <h1 className='hero--heading'>
                    Online experience
                </h1>
                <p className='hero--details'>
                Join unique interactive activities
                led by one-of-a-kind hosts—all
                without leaving home.
                </p>
            </div>
        </section>
        
    )


}