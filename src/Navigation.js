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
                <Link to="/assignment5"><li>- Assignment 5 - Passing data to both the child component</li></Link>
                <Link to="/assignment6"><li>- Assignment 6 - Render boxes from data file and change boolen pram</li></Link>
                <Link to="/jokes"><li>Joke app for conditional rendering</li></Link>
                <Link to="/forms"><li>React forms</li></Link>
            </ul>
        </div>
    )
}
export default Navigation;