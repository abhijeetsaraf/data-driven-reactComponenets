import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Travel from './Travel';
import Airbnb from './Airbnb';
import Navigation from './Navigation';


function App() {
    
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={Navigation}/>
          <Route path='/airbnb' Component={Airbnb}/>
          <Route path='/travel' Component={Travel}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;
