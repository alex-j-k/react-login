import React from 'react'

const PleaseLogIn = (props) => {
    return ( 
        <div className="pleaselogin">
            <h1>Choose your account</h1>

            <button 
            className="github"
            onClick={() => props.authenticate('Github')}>
            Log In With Github
            </button>

            <button 
            className="facebook"
            onClick={() => props.authenticate('Facebook')}>
            Log In With Facebook
            </button>

        </div>
     );
}
 
export default PleaseLogIn;