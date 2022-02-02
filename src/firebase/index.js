import firebase from 'firebase/app'
import "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBEky3Ezu6tRVdJtPzaEs-6Zb5LEN5F__0",
    authDomain: "aware2-634b4.firebaseapp.com",
    projectId: "aware2-634b4",
    storageBucket: "aware2-634b4.appspot.com",
    messagingSenderId: "961171917578",
    appId: "1:961171917578:web:7ff04f6c434f90815288f3"
}) 

export const getFirestore = () =>{
    return firebase.firestore(app)
}