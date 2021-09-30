import React from 'react'

const Explanation = () => {
    return ( 
        <div className="explanation">
            <ol>
                <li>firebase --&gt; authentication </li>
                <li>choose, google, twitter, email etc</li>
                <li> click facebook - Asks for app id and app secret - Gives URL</li>
                <li></li>
                <li>facebook for developers - create app  - settings - basic</li>
                <li>add ID and Secret to firebase</li>
                <li>copy firebase URL to facebook-dashboard-facebooklogin-setup-settings </li>
                <li>Turn on - embedded browser OAuth login</li>
                <li>enter firebase URL - Valid OAuth Redirect URIs</li>
                <li></li>
                <li>Github settings applications new</li>
                <li>name app and paste in firebase url</li>
                <li>Register app</li>
                <li>Copy id - Generate new secret </li>
                <li></li>
                <li>BODY - import firebase form firebase</li>
                <li>BODY - create authetnicate function in body - pass in providor</li>
                <li>BODY - pass authenticate function down from body to plaseslogin</li>
                <li>PLEASE LOGIN - onClick run inline anonymous function - props.authenticate github/facebook</li>
                <li></li>
                <li>store userid in state</li>
                <li>if uid, display hidden code</li>
                <li>add logout button, logout from firebase.auth and clear uid state</li>
                <li>add persist state on refresh to not logout</li>
            </ol>
        </div>
     );
}
 
export default Explanation;