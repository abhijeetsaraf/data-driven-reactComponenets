import './index.css';
import React from "react";
import Star from './components/Star';


export default function(){
    const[contact, setContact] = React.useState({
        firstName:"Abhi",
        lastName:"Saraf",
        phone:"+1(206-532-7086)",
        email:"abhi.saraf25@gmail.com",
        isFavorite:false
    })
    //console.log(contact)

    function toggleFavorite(){
        setContact(prevState => {
            return {...prevState, isFavorite: !prevState.isFavorite}
        })

    }
     
    //NOTE : We can pass the function through custom prop like handle click
    // We are passing function as we pass values. This is called passing state setter function
    return(
        <main>
            <div>
                <h1>A</h1>
            </div>
            
            <Star isFavorite={contact.isFavorite} handleClick={toggleFavorite}/>
            
            <h3>{contact.firstName} {contact.lastName}</h3>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>

        </main>
    )
}