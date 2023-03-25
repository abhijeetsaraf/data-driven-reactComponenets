import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data';
import './index.css';

function Airbnb(){
    const cards = data.map(x => {
        return (<Card
        key={x.id}
        image={x.image}
        rating={x.rating}
        ratingCount={x.ratingCount}
        country={x.country}
        title={x.title}
        cost={x.cost}
        openSpots={x.openSpots}
        />
        )
      })
    
      return(
        <div className="container">
      <NavBar/>
      <HeroSection/>
      <div className='card--section'>
        {cards}
      </div>
    </div>
    )
}

export default Airbnb;