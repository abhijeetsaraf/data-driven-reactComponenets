import starDeselected from "../images/star-deselcted.png";
import starSelected from "../images/star-selected.png";

//NOTE: We can also accept function calls through props

export default function Star(props){
    console.log(props)
    return(
        <div>
                <img src={props.isFavorite ? starSelected : starDeselected}
                  onClick={props.handleClick}
                  alt=""/>
                
        </div>
    )
}