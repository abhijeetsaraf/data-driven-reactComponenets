import '../index.css';
import star from "../images/star-icon.png"


export default function Card(props){
    return(
        <div className='card--container'>
            <div>
                <img className='card--image' src={props.image} alt=""/>
                <div className='card--tag'>SOLD OUT</div>
            </div>
            <div className='card--details'>
                <div className='card--status'>
                    <img src={star} alt="" className='card--rating--icon'/>
                    <div> ({props.rating})</div>
                    <div>{props.ration_count}</div>
                    <div>USA</div>
                </div>
                <div>
                    <div className='card--content'>{props.title}</div>
                    <div className='card--content'><strong>From ${props.cost}</strong> / person</div>
                </div>
            </div>
        </div>

    )
}
            // image = "../images/image-1.png"
            // rating = "5"
            // ration_count = "6"
            // country ="USA"
            // title ="Life lessons with Katie Zaffer"
            // cost ="136" 