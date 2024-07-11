import PropTypes from 'prop-types';
import { useState } from 'react';
export function UserDetails ({user}){

    // eslint-disable-next-line no-unused-vars
    const [isEditing , setisEditing] = useState(false)
    // eslint-disable-next-line react/prop-types
    const [username , setUsername] = useState(user.username)
    // eslint-disable-next-line react/prop-types
    const [useremail, setUseremail] = useState(user.useremail)

   
    return(
        <div>
            <div>
                <button
                   onClick={()=>{
                      setisEditing((currentstate) => !currentstate)
                   }}
                >Edit</button>
                <button>Delete</button>
                <button 
                    onClick={()=>{
                        console.log(user);
                    }}
                >Save</button>

            </div>

           <div>
             <br />
            <b>ID :</b>
            <span>{user.id}</span>
            <br />

            <b>Name :</b>
            {isEditing ? <input 
                name='username'
                id='username' 
                value={username}
                onChange={(e) =>
                    setUsername(e.target.value)
                }

            /> :<span>{user.name}</span>}
            <br />
            <b>Email :</b>
            {isEditing ? <input
            name='Email'
            id='Email'
            value ={useremail}
            onChange={(e)=>{
                setUseremail(e.target.value)
            }}
            /> :<span>{user.email}</span>}
            <br />
            <b>Age</b>
            <span>{user.age}</span>
           </div>
        </div>
    );
}


//type checking for the objects in with proptype. When we have to type check an object we use the 
//shape function to do so.
UserDetails.propTypes = {
    user : PropTypes.shape(
        {
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            email : PropTypes.string.isRequired,
            age : PropTypes.number.isRequired
        }
    )}