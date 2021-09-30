import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtul4VDGlSSIG9eh9i7fVYK1NtqOenvGo",
    authDomain: "login-295a9.firebaseapp.com",
    projectId: "login-295a9",
    storageBucket: "login-295a9.appspot.com",
    messagingSenderId: "886324810588",
    appId: "1:886324810588:web:da2eae3f79ae825b1e2799"
  };

  var FirebaseApp = firebase.initializeApp(firebaseConfig); 
 
export default FirebaseApp;