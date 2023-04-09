import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Travel from './Travel';
import Airbnb from './Airbnb';
import Navigation from './Navigation';
import Memegenerator from './Memegenerator';
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import Assignment3 from './Assignment3';
import Assignment4 from './Assignment4';
import Assignment5 from './Assignment5';
import Assignment6 from './Assignment6';
import Jokes from './Jokes';
import Forms from './Forms';
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
          <Route path='/assignment2' Component={Assignment2}/>
          <Route path='/assignment3' Component={Assignment3}/>
          <Route path='/assignment4' Component={Assignment4}/>
          <Route path='/assignment5' Component={Assignment5}/>
          <Route path='/assignment6' Component={Assignment6}/>
          <Route path='/jokes' Component={Jokes}/>
          <Route path='/forms' Component={Forms}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;
