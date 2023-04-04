import './index.css';
import React from "react";
import starDeselected from "./images/star-deselcted.png";
import starSelected from "./images/star-selected.png";
import Star from './components/Star';


export default function(){
    const[contact, setContact] = React.useState({
        firstName:"Abhi",
        lastName:"Saraf",
        phone:"+1(206-532-7086)",
        email:"abhi.saraf25@gmail.com",
        isFavorite:false
    })
    console.log(contact)

    function toggleFavorite(){
        setContact(prevState => {
            return {...prevState, isFavorite: !prevState.isFavorite}
        })

    }
     
    return(
        <main>
            <div>
                <h1>A</h1>
            </div>
            <div onClick={toggleFavorite}>
                <Star isFavorite={contact.isFavorite}/>
            </div>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>

        </main>
    )
}