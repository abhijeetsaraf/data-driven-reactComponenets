import starDeselected from "../images/star-deselcted.png";
import starSelected from "../images/star-selected.png";

export default function Star(props){
    console.log(props)
    return(
        <div>
                <img src={props.isFavorite ? starSelected : starDeselected} alt=""/>
                
        </div>
    )
}