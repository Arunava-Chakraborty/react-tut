import Details from "./components_Hitesh/tailwind";
import { useState } from "react"

export default function App_hitesh (){
    const [count , setCount] = useState(15)
    console.log(count);
    return (
        <div>
            <Details username = "Arunava" />
            <h1>Welcome to react{"  " + count}</h1>
            <h2>Days of Learning React{"  " + count}</h2>
            <button 
                onClick={() =>{
                    if(count == 50){
                        return
                    }
                    setCount(count +1)
                }}            
            >Add Days count</button>
            {" "}
            <button 
                onClick={()=>{
                    if(count == 0){
                       return 
                    }
                    setCount(count - 1)
                }}
            >Remove Days Count</button>

        </div>
    )
}