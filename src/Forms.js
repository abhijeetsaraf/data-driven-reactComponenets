import React from "react";
import "./index.css"

export default function(){
    const[formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly: true,
        employment: "",
        favColor:""
    })
    

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    
    //NOTE: In controlled componenets we just make sure that the value
    // is equaled to the state that represent that input value.  
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Write your comments here"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you unfriendly</label>
            <fieldset>
                <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleChange}
                        checked={formData.employment==="unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={handleChange}
                        checked={formData.employment==="part-time"}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={handleChange}
                        checked={formData.employment==="full-time"}
                    />
                    <label htmlFor="full-time">Full-time</label>
            </fieldset>
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <select
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleChange}
                        name="favColor"
                    >   
                        <option value="">--Choose color--</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Pink">Pink</option>
                        <option value="Purple">Purple</option>
                    </select>
            <button>Submit</button>        
        </form>
    )
}