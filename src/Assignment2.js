
import React from "react";

export default function(){
    
    const[isGoingOut, setGoingOut] = React.useState(true)
    
    // function flip(){
    //     console.log("clicked")
    //     //isGoingOut? "Yes":"No"
    //     // if(isGoingOut === "Yes")
    //     //     setGoingOut(function(){return "No"}) 
    //     // else 
    //     //     setGoingOut(function(){return "Yes"}) 

    //     isGoingOut === "Yes" ?  setGoingOut(function(){return "No"}) : setGoingOut(function(){return "Yes"}) 
    // }

    // Alternative method
    function flip(){
        setGoingOut(prevState => ! prevState)
    }

    return(
        <div>
            <div>Do you feel like going out</div>
            <div onClick={flip}>{isGoingOut? "Yes" : "No"}</div>
        </div>
    )
}