import "../index.css";
import logo from "../images/troll-face.png";


export default function(){
    return(
        <nav className='m--nav'>
            <div className='m--nav-content'>
                <img src={logo} alt='' className='m--nav-logo'/>
                <div className='m--nav-title'>Meme Generator</div>
                <div className='m--nav-subtitle'>React Course - Project 3</div>
            </div>
        </nav>
    )
}