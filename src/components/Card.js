import '../index.css';
import star from "../images/star-icon.png"


export default function Card(props){
    return(
        <div className='card--container'>
            <div>
                <img className='card--image' 
                src= {require(`../images/${props.image}`)} alt=""/>
                <div className='card--tag'>SOLD OUT</div>
            </div>
            <div className='card--details'>
                <div className='card--status'>
                    <img src={star} alt="" className='card--rating--icon'/>
                    <div> ({props.rating})</div>
                    <div>{props.ratingCount}</div>
                    <div>{props.country}</div>
                </div>
                <div>
                    <div className='card--content'>{props.title}</div>
                    <div className='card--content'><strong>From ${props.cost}</strong> / person</div>
                </div>
            </div>
        </div>

    )
}
          
//<img src={`/img/${this.props.product.src}.png`} width="50" />
//image:"../images/image-3.png",