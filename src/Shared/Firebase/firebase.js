import app from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';
import '@firebase/analytics';
import "@firebase/functions";
// import 'regenerator-runtime/runtime';

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
        this.functions = app.functions();
    }

    // auth API for password and email
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doUpdateAuthUser = async (user) => await this.auth.currentUser.updateProfile(user)
        .catch((error) => {
            console.error(error)
            return error
        });
    doSignInWithEmailAndPassword = async (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
    doFetchSignForEmail = email => this.auth.fetchSignInMethodsForEmail(email);
    getCurrentUser = () => this.auth.currentUser
    removeCurrentUser = () => this.getCurrentUser().delete()
    // firestore API

    doUpdateFirestoreUser = async (id,user) =>{

        await this.db.collection('users/')
            .doc(id).set(user,{ merge: true }).catch((error) => {
                console.error("Error adding document: ", error);
                return -1;
            });
    }

    checkCoupon = async (data) => {
        const check = this.functions.httpsCallable("checkCoupon");
        return await check(data)
            .then(res => {
                console.log(data, res)
                return res
            })
            .catch(error => {
                    console.error(data, error)
                    return error
            })
    }

}


export default Firebase;
