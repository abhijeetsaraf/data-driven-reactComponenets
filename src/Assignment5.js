import A5body from "./components/A5body";
import A5header from "./components/A5header";
import React from "react";
// Create two separate component header and body. 
// Pass the data from the Header component to the App comp ie that Assignment5.js 
// and then pass back the data to the body component. 

export default function(){
    const[user, setUser] = React.useState("Hello")
    
    return(
        <div>
            <A5header user={user}/>
            <A5body user={user}/>
        </div>
    )
}