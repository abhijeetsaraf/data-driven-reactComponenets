import '../index.css';
import logo from "../images/globe-logo.png";

export default function(){
    return(
        
        <nav className='t--nav'>
            <div className='t--nav-content'>
                <img src={logo} alt='' className='t--nav-logo'/>
                <div className='t--nav-title'>my travel journal</div>
            </div>
        </nav>
        
    )
}