// import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_FIREBASE_APPID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID

}

const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp)

export const featureDb = await getDocs(collection(firestore, 'webside/features/feature'))

export const teamDb = await getDocs(collection(firestore, 'webside/team/personer'))

export const blogDb = await getDocs(collection(firestore, 'webside/blog/blogindlaeg'))