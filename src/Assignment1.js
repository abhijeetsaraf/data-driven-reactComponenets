
import React from "react"

    //Initializing the component with a default value with state
    //React.useState will return an Array
    // Array destructuring 

    //NOTE:
    // If you ever need the old value of state to help you determine the new value if state
    // you should pass a callback function to your state setter function instead of using state directly.
    // This callback function will receive the old value of state as its parameter, which you can 
    // use to determine your new value of state. 



export default function(){
    
    const [count, setCount] = React.useState(0);
    console.log(count)
    

    //example with best practice

    function add(){
        setCount(function(prevState){ return (prevState + 1)})
    }

    function sub(){
        setCount(function(prevState){ return (prevState + 1)})
    }


    return(
        
        <div>
            <button  onClick={add}>+ Add</button>
            <button  onClick={sub}>- Sub</button>
            <div>
                <h1>
                    {count}
                </h1>
            </div>
            
        </div>
    )
}