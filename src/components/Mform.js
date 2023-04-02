import React from "react";
import "../index.css";
import mdata from "../mdata";


export default function(){
    
    const [memeImage, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    const[topText, setTopText] = React.useState("meme lol")
    const[bottomText, setBottomText] = React.useState("meme loller")
    
    function top(){
        const topText = document.getElementById("topText").value
        console.log(topText)
        setTopText(function(){
            return topText
        })
    }

    function bottom(){
        const bottomText = document.getElementById("bottomText").value
        setBottomText(function(){
            return bottomText
        })
    }

    function getMemeData(){
        const memeArray = mdata.data.memes
        const randomMeme = Math.floor(Math.random()*memeArray.length)
        const memeUrl = memeArray[randomMeme].url
        //console.log(memeUrl)
        setImage(function(){
            return memeUrl
        })
        
    }
    
    return(
        <form className="m--form">
            <div className="m--inputfield-container">
                <input type="text" placeholder="top text" id="topText" className="m--inputfield" onInput={top} />
                <input type="text" placeholder="bottom text" id="bottomText" className="m--inputfield" onInput={bottom}/>
            </div>
            <div>
                <button onClick={getMemeData} type="button" className="m--button">Get a new meme image</button>
            </div>
            <div className="m--imagebox">
                <img src={memeImage} alt="" className="m--image"/>
                <div className="m--toptext" >{topText}</div>
                <div className="m--bottomtext">{bottomText}</div>
            </div>

        </form>
    )
}