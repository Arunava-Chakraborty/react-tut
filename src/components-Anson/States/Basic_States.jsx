import { useState } from "react"
import React from "react"
export default function States(){
//console.log(useState("Hello i am a state component"))

//this below way of writing code is called array destructuring 
//useState()--> it returns an array with 2 value in it and we r holding those values here in array.
//const [state_variable dispatcher_function]=useState("empty as we r working with strings")

 //passing value in the state hook with the help of array destructuring.   
    //const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

//passing the value with the help of objects.

    const [formFields , setFormfields] = useState({
        username : "",
    })

//creating logic for submit button to appear after certain condition.

    let isDisabled = "";
    if(formFields.username.length < 5 || password.length < 5 ){
        isDisabled = true
    }
    else{
        isDisabled = false
    }


    return(
       <React.Fragment>
            <form >
                <div>
                    <label htmlFor="username">Username For State</label>
                    <br />

{/*This input field accept the value form line 11*/}
                    {/*<input type="text" 
                    id="username" 
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    />*/}


{/* this accepts the value from line 16 */}
                    <input type="text"
                    id="username"
                    value={formFields.username}
                    onChange={(e)=>{
                        setFormfields((currentState)=> ({
                            ...currentState,
                            username : e.target.value
                        })
                            
                        )
                    }}
                    />
                    <br />

{/* this is  for password fields accepts value form line 12 */}
                    <label htmlFor="password">Password For State</label>
                    <br />
                    <input type="password"
                     id="password" 
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}
                     />
                    <br />

                    
                    <button disabled = {isDisabled}>Submit</button>
                </div>
                <div>
                   <h4>username = {formFields.username}</h4>
                </div>
            </form>
       </React.Fragment>
    )
}