import { useState , useEffect } from "react"

export default function Useeffect(){

    const [resourceType , setresourceType] = useState()

    useEffect(()=>{
        console.log("useffect in action")
    } , [resourceType])

    return(
        <div>
            <button 
            className=' outline-none
          bg-blue-700 text-white px-3 py-0.5
          shrink-0'
          onClick={()=>{
                setresourceType("post now")
            }}>POST</button>

            <button className=' outline-none
          bg-blue-700 text-white px-3 py-0.5
          shrink-0
          ' onClick={()=>{
                setresourceType("users now")
            }}>Users</button>
            <button className=' outline-none
          bg-blue-700 text-white px-3 py-0.5
          shrink-0
          ' onClick={()=>{
                setresourceType("comments now")
            }}>comments</button>

        <h1>{resourceType}</h1>

        
        </div>
    ) 
}