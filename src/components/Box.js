import "../index.css";
import React from "react";

export default function Box(props){
    const[tileState, toggleTileState] = React.useState(props.on)
    
    const styles ={
        backgroundColor: tileState.on ? "#222222" : "#999999"
    }

    function toggle(){
        toggleTileState(prevState => {
            return{on: !prevState.on}
        })
       
    }

    return(
        <div>
            <div style={styles} id="tile"
            className="b--box" onClick={toggle}></div>

        </div>
    )
}