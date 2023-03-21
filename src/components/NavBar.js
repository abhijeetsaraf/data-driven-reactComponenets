import '../index.css';
import logo from "../images/airbnb-logo.png"

export default function NavBar(){
    return(
        <nav className='nav'>
            <img src={logo} alt="" className='nav--logo'/>
        </nav>
    )


}