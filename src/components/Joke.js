import '../index.css';


export default function Joke(props){
    return(
           <div>
                <div>{props.setup}</div>
                <div>{props.punchline}</div>
           </div>    
          )


}