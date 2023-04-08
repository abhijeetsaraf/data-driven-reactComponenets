import data from "./boxes";
import React from "react";
import Box from "./components/Box";

export default function(){
    const [allSquare, setAllSquares] = React.useState(data)

    //Setting the style attribute in the DOM element to be an object to use . syntax  
    const square = allSquare.map(x =>(<Box 
        key={x.id} 
        on={x.on} 
        tf={toggle}
        id={x.id}
        />))

    //Alternative method. Rather then creating toggle function with
    //every BOX componenet we will pass toggle function through the
    // App componenet ( Assignment6.js )
    
    //Declarative method to solve the problem
    function toggle(id){
        setAllSquares(prevSquare => {
            return prevSquare.map(x => {
                return x.id === id ? { ...x, on: !x.on} : x
            })
        })
    }
    
    

    //The below method is imperative in nature not declarative! 
    //Alternative method above
    // function toggle(id){
    //     setAllSquares( prevSquares => {
    //         const newSquare = []
    //         for(let i = 0; i < prevSquares.length; i++){
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id){
    //                 const updatedSquare = { 
    //                     ...currentSquare, on: !currentSquare.on
    //                 }
    //                 newSquare.push(updatedSquare)
    //             }else{
    //                 newSquare.push(currentSquare)
    //             }
    //         }
    //         return newSquare
    //     })
    // }    
    
    
    //We need to note here that the setAllSquares f(x) is an 
    //asyncronous function there may be delay between calling 
    //setAllSquares and the state variable actually being updated.

    // function toggle(id){
    //     //console.log(id)   
        
    //     const squares = [...allSquare]
        
    //     for(let i=0; i<squares.length; i++ ){
    //         if( squares[i].on === id){
    //             squares[i].on = !squares[id].on
    //         } 
    //     }
    //     setAllSquares(squares)
    // }

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