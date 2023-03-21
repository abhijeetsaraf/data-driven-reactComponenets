import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Card from './components/Card';

import './index.css';


//My custom tags will come between
//between first div. 
//will have to create three sections
// NavBar
// HeroSection
//
function App() {
  return (
    <div className="container">
      <NavBar/>
      <HeroSection/>
        <div className='card--section'>
          {/* src={require('./images/timer.png')} */}
          <Card
            image = {require("./images/image-1.png")}
            rating = "5"
            ration_count = "6"
            country ="USA"
            title ="Life lessons with Katie Zaffer"
            cost ="136" 
          />
          <Card
            image = {require("./images/image-2.png")}
            rating = "5"
            ration_count = "30"
            country ="USA"
            title ="Learn wedding photography"
            cost ="125" 
          />
          <Card
            image = {require("./images/image-3.png")}
            rating = "4.8"
            ration_count = "6"
            country ="USA"
            title ="Group mountain biking"
            cost ="50" 
          />
        </div>
    </div>
  )
}

export default App;
