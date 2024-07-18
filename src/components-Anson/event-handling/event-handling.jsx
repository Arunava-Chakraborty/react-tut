export default function  Event_Handling(){
    return <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData(e.target)
            console.log(formData.get("username"))
            console.log(formData.get("password"))
        }}>
      
        <label htmlFor="username">Username fr event_handling</label>
        <br />
        <input  id="Username"
        onClick={
            (e)=>{
                console.log("clicked")
                console.log(e)
            }
        }
        onChange={
            (e)=>{
                console.log(`username : ${e.target.value}`)//by this we can hold the username value
            }
        }
        name="username"
        />

        <br />

        <label htmlFor="Password">Password for event_handling</label>
        <br />
    
        <input type="password" 
        id=" text" 
        onChange ={
            (e)=>{
                console.log(e.target.value)
            }
        }
        name="password"
        />
        <br/>
        <button>Submit</button>
    </form>
    
    </div>
}