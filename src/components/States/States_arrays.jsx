import { useState } from "react";
import { UserDetails } from "../rendering/UserDetails";

export default function StateArray (){
    // eslint-disable-next-line no-unused-vars
    const [users , SetUsers] = useState([
        {
            id: 1,
            name: "John1",
            email:"john1@email.com",
            age: 20
        },
        {
            id: 2,
            name: "John2",
            email:"john2@email.com",
            age: 21
        },
        {
            id: 3,
            name: "John3",
            email:"john3@email.com",
            age: 22
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