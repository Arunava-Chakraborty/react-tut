import ConditionalRendering from "./ConditionalRendering"
import {UserDetails} from "./UserDetails";

export default function ArrayRendering(){
    const mockuser = [
        {
            id: 1,
            name: 'John Doe1',
            email: 'john@gmail.com',
            age :21,
        },
        {
            id: 2,
            name: 'John Doe2',
            email: 'john2@gmail.com',
            age :22,
        },
        {
            id: 3,
            name: 'John Doe3',
            email: 'john3@gmail.com',
            age :23,
        },
        {
            id: 4,
            name: 'John Doe4',
            email: 'john4@gmail.com',
            age :24,

        },
        {
            id: 5,
            name: 'John Doe5',
            email: 'john5@gmail.com',
            age :25,
        },
    ];
    

    return (

        <div>
            <ConditionalRendering/>
            {mockuser.map((user) => {
                return(
                    <UserDetails key={user.id} user = {user}/>
                    
                )
            })}
        </div>
        )
    
}