import React from 'react'
import LoggedIn from './LoggedIn';
import PleaseLogIn from './PleaseLogIn';
import firebase from 'firebase';
import firebaseApp from './Fire';


class  Body extends React.Component {

    state = {
        udi: null
    };

    //PERSIST STATE ON REFRESH
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({user});
            }
        })
    }

    // LOGOUT
    logMeOut = async () => {
    console.log('logging out');
    this.setState({uid: null});
    await firebase.auth().signOut();
    
    }

    authHandler = async (authData) => {
        console.log(authData);
        this.setState({ uid: authData.user.uid});
        console.log(this.state.uid);
    }

    authenticate = (provider) =>{
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
   };

  

render() {


    if (!this.state.uid) {
        return ( 
        <div>
        <h1>Please sign in!</h1> 
        <PleaseLogIn authenticate={this.authenticate}></PleaseLogIn>
        </div>
        )
     }

    if (this.state.uid) {
        return (
        
        <div>

        <LoggedIn
        eraseId={this.eraseId} 
        uid={this.state.uid}></LoggedIn>

        <button 
        className="logout"
        onClick={() => {this.logMeOut()}}
        >LOGOUT</button>

        </div>
        )
    }
}
}
 
export default Body;

// 0eSudv2O5fhsNNAj639KVCxguqw1
