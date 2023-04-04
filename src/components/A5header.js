//Send the details from the header function to
//the immediate parent DOM node 
import React from 'react';

export default function A5header(props){
    
    return(
        <header>
            <p>Current User: {props.user}</p>
        </header>
    )
}
