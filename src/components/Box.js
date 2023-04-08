import "../index.css";
import React from "react";

export default function Box(props){
    //const[tileState, toggleTileState] = React.useState(props.on)
    //console.log(props.id)
    const styles ={
        backgroundColor: props.on ? "#222222" : "#999999"
    }

    // function toggle(){
    //     toggleTileState(prevState => {
    //         return{on: !prevState.on}
    //     })
       
    // }


    //The onClick event handler is not simply calling function rather
    // an event that will be captured through a callback function. 
    // We can pass the ID of the prop that eventually notes
    // which box was clicked. 
    return(
        <div>
            <div 
                style={styles}
                className="b--box" 
                onClick={() => props.tf(props.id)}>
            </div>

        </div>
    )
}