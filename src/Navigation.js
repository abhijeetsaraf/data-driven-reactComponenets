import './index.css';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <Link to="/"><h3>List of the react apps</h3></Link>
            <ul>
                <Link to="/airbnb"><li>Airbnb static site</li></Link>
                <Link to="/travel"><li>Travel journal</li></Link>
                <Link to="/memegenerator"><li>Meme Generator</li></Link>
                <Link to="/assignment1"><li>- Assignment 1 - Counter</li></Link>
                <Link to="/assignment2"><li>- Assignment 2 - Flip the text through states Yes - No </li></Link>
                <Link to="/assignment3"><li>- Assignment 3 - Add items to list - Compelex State Array </li></Link>
                <Link to="/assignment4"><li>- Assignment 4 - Toggle favorite button - Complex States Objects </li></Link>
            </ul>
        </div>
    )
}
export default Navigation;