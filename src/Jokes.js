import Joke from "./components/Joke";
import data from "./JokesData";
import React from "react";

export default function(){

    const jokes = data.map(x => {
        return(
            <Joke
                key={x.id}
                setup={x.setup}
                punchline={x.punchline}
                status={x.isShown}
                //tf={toggle}
            />
        )
    })
   

    return(
        <div>
            <div>{jokes}</div>
        </div>
    )
}