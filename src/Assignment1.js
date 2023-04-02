
import React from "react"

export default function(){
    //const [things, setThings] = React.useState(["Things1","Things2"])
    
    //const items = things.map(x => <p key={x}>{x}</p>)
     
    //Initializing the component with a default value with state
    //React.useState will return an Array
    // Array destructuring 
    
    const [count, setCount] = React.useState(0);
    console.log(count)
    

    function add(){
        setCount(count+1)
    }

    function sub(){
        setCount(count-1)
    }

    // function addItems(){
    //    const newThingText = `Things ${things .length+1}`
    //    setThings(prevState => [...prevState, newThingText])
       
    // }
    
    // function greeting(name){
    //     const date = new Date()
    //     const hours = date.getHours()   
    //     //console.log(hours)
    //     let time

    //     if(hours >= 4 && hours < 12){
    //         time = "morning"
    //     } else if ( hours >= 12 && hours < 17){
    //         time = "afternoon"
    //     } else if ( hours >= 17 && hours < 20){
    //         time = "night"
    //     }
    //     return `Good ${time}, ${name}`
    // }
    // console.log(greeting("John"))
    
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