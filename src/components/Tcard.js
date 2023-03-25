import "../index.css";
import logo from "../images/location.png";

export default function(props){
    return(
        <div className="t--card-container">
            <div className="t--card-image">
                <img src={require(`../images/${props.item.image}`)} alt=""/>
            </div>
            <div className="t--card-content">
                <div className="t--card-locationitems">
                    <img src={logo} className="t--card-locationlogo"/>
                    <div>{props.item.country.toUpperCase()}</div>
                    <div className="t--card-locationlink">View on Google Maps</div>
                </div>
                <div className="t--card-title">{props.item.title}</div>
                <div className="t--card-date">{props.item.date}</div>
                <div className="t--card-details">{props.item.details}</div>
            </div>
        </div>
    )
}
