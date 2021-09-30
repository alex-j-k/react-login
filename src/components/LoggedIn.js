import React from 'react'


const LoggedIn = (props) => {



    return ( 
        <div className="loggedin">
            <h1>You have successfully Logged in!</h1>
    <h1>Your unique ID is {props.uid}</h1>

            <h3>The secret message is:</h3>
            <h3>Unequaled Umbrella Normal Bean Two Toothbrush</h3>
            
        </div>
     );
}
 
export default LoggedIn;