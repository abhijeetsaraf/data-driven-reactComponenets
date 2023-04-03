
import React from "react";

export default function(){
    const[thingsArray, setThingsArray] = React.useState(["Things1", "Things2"])
    console.log(thingsArray)
    //.puch() method would be modifying the state directly. 
    //That might not be  good option
    function addItems(){
        setThingsArray(prevThingsArray => [...prevThingsArray, `Things${prevThingsArray.length+1}`])
    }
    
    const thingsElement = thingsArray.map(things => <p key={things}>{things}</p>)

    return(
        <div>
            <button onClick={addItems}>Add items to list</button>
            <div>{thingsElement}</div>
        </div>
    )
}