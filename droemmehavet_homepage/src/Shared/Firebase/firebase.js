import app from '@firebase/app';
import '@firebase/auth';
import {doc, setDoc} from '@firebase/firestore';
import '@firebase/firestore';
import '@firebase/storage';
import '@firebase/analytics';
import 'regenerator-runtime/runtime';

// import {islands} from './developmentDB/data.js'
// tutorial: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

const devConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID

}



class Firebase {
    constructor() {
        app.initializeApp(devConfig);
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
        this.analytics = app.analytics();
       
    }

    // auth API for password and email
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
    getCurrentUser = () => this.auth.currentUser


    // firestore API
    doCreateFirestoreUser = (user) =>{
        // this.db.setDoc(doc)
    }
   
   }



export default Firebase;
