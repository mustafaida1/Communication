import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqPn3UTrWKWuPY1VNEf41M6d6qsAx0Nh4",
    authDomain:"communication-35e22.firebaseapp.com",
    projectId:  "communication-35e22",
    storageBucket: "communication-35e22.appspot.com",
    messagingSenderId: "1087993859093",
    appId: "1:1087993859093:web:ee2b2213d25c97857a921c",
    measurementId: "G-W9KFY5B4WS"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }