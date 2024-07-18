import { useState } from "react";
import { UserDetails } from "../rendering/UserDetails";

export default function StateArray (){
    // eslint-disable-next-line no-unused-vars
    const [users , SetUsers] = useState([
        {
            id: 1,
            name: "1",
            email:"2",
            age: 20
        },
        {
            id: 2,
            name: "",
            email:"john2@email.com",
            age: 21
        }
    ])

    return (
        <div>
            {users.map((user) =>{
                return (
                <UserDetails key={user.id} user={user} />
                
            )
            })}
        </div>    
        
    )

}