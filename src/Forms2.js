import React from "react";
import "./index.css";

export default function(){
    const[formData, setFormData] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        newsletterSubscription:""
    })
    //We are pulling all the properties through event
    function handleChange(event){
        //console.log("clicked")
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState, [name]: type === "checkbox" ? checked : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassword){
            console.log("Successfully signed up")
        }else{
            console.log("Password did not match")
            return
        }  
        if(formData.newsletterSubscription===true){
            console.log("Thanks for signing up for the newsletter")
        }
    }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter email"
                onChange={handleChange} 
                name="email"
                value={formData.email}               
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange} 
                name="password"
                value={formData.password}               
            />
            <input
                type="text"
                placeholder="Confirm password"
                onChange={handleChange} 
                name="confirmPassword"
                value={formData.confirmPassword}               
            />
            <input
                type="checkbox"
                id="newsletterSubscription"
                onChange={handleChange} 
                name="newsletterSubscription"
                checked={formData.newsletterSubscription}               
            /><label htmlFor="newsletterSubscription">I want to join the newsletter</label>
            <button>Sign up</button>
        </form>
    )
}