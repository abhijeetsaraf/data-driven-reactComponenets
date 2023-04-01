import "../index.css";
import mdata from "../mdata";


export default function(){
    function getMemeData(){
        const memeArray = mdata.data.memes
        const randomMeme = Math.floor(Math.random()*memeArray.length)
        const memeUrl = memeArray[randomMeme].url
        //console.log(memeArray)
        return(<img src={memeUrl}/>)
    }
    
    
    return(
        <form className="m--form">
            <div className="m--inputfield-container">
                <input type="text" placeholder="top text" className="m--inputfield"  />
                <input type="text" placeholder="bottom text" className="m--inputfield" />
            </div>
            <div>
                <button onClick={getMemeData} type="button" className="m--button">Get a new meme image</button>
            </div>
            <div className="m--imagebox">
                
            </div>

        </form>
    )
}