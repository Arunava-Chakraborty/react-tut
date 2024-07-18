export default function ConditionalRendering (){
 
    //const isloggedin = false;
    const check_ternary = "";
// checking rendering with ternary operator 
        return (
           <div>
            {
                check_ternary === "verified" ? (
                    <h1>verified</h1>
                ) : check_ternary === "not-verified" ?(
                        <h2>not logged in</h2>
                ): check_ternary === null ?(
                    <h3>not registered</h3>
                ) : (
                    <h4>error 404</h4>
                )
            }
           </div>
        )

}
/*       
This is basic if else used in conditional rendering.
if(isloggedin== false){
            return(
                <React.Fragment>
                    <h1>you need to log in first</h1>
                </React.Fragment>
            )
        }
        else if (isloggedin == true){
            return(
                <>
                    <h1>Welcome to the app</h1>
                </>
        )
    }
    
    
*/
