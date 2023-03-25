import './index.css';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <Link to="/"><h3>List of the react apps</h3></Link>
            <ul>
                <Link to="/airbnb"><li>Airbnb static site</li></Link>
                <Link to="/travel"><li>Travel journal</li></Link>
                
            </ul>
        </div>
    )
}
export default Navigation;