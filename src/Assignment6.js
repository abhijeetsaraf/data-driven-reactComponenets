import data from "./boxes";
import React from "react";
import Box from "./components/Box";

export default function(){
    const [allSquare, setAllSquares] = React.useState(data)

    //Setting the style attribute in the DOM element to be an object to use . syntax  
    const square = allSquare.map(x =>(<Box key={x.id} on={x.on}/>))

    //Rendering the squares mapped from the allsquare obj. 
    return(
        <main>
            {square}
        </main>
    )
}
    


//Alternative way
//     const [box,setBox] = React.useState(data.map(x => {
//         return(<div className="b--empty"
//         key={x.id}
//         item={x}
//         />)
//     }))

//     return(
//         <div>
//             <h1>Boxes will go here</h1>
//             <div>{box}</div>
//         </div>
//     )
// }