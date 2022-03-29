import firebase from "firebase"
import 'firebase/firestore'


if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUCLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUCLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUCLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase