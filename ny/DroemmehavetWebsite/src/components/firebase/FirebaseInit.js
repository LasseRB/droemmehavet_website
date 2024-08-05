// import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import FirebaseConfig from '@/components/firebase/FirebaseConfig.js'
const firebaseApp = initializeApp(FirebaseConfig);

export const firestore = getFirestore(firebaseApp)

export const featureDb = await getDocs(collection(firestore, 'webside/features/feature'))

export const teamDb = await getDocs(collection(firestore, 'webside/team/personer'))

export const blogDb = await getDocs(collection(firestore, 'webside/blog/blogindlaeg'))