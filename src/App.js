import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Travel from './Travel';
import Airbnb from './Airbnb';
import Navigation from './Navigation';
import Memegenerator from './Memegenerator';
import Assignment1 from './Assignment1';

function App() {
    
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={Navigation}/>
          <Route path='/airbnb' Component={Airbnb}/>
          <Route path='/travel' Component={Travel}/>
          <Route path='/memegenerator' Component={Memegenerator}/>
          <Route path='/assignment1' Component={Assignment1}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;
