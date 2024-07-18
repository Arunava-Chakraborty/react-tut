import UserProfile from "./components-Anson/basic_jsx/userProfile"
import React from "react";
import Event_Handling from "./components-Anson/event-handling/event-handling"
import States from "./components-Anson/States/Basic_States";
import StateArray from "./components-Anson/States/States_arrays";
import App_hitesh from "../React-Hitesh/src/App2";

export default function App (){

    // eslint-disable-next-line no-unused-vars
     window.addEventListener('resize' , (e)=>{
        console.log(window.innerHeight, window.innerWidth);
    });
    window.addEventListener("click" , (e) =>{
        console.log(e.clientX, e.clientY);
    })


    const callme = ()=>{
      console.log("hello");
    }
    return(
        <React.Fragment>
            <h1>React</h1>

            <UserProfile 
                age={25}
                company="ABc"
                callme = {callme}
             />

            <Event_Handling/>
            <States/>
            <StateArray/>
            <App_hitesh/>

        </React.Fragment>
    );
}