// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDWknALDn6K4hxsFdScFsJ8uVwfRy1Tl44",
    authDomain: "facebook-clone-6d863.firebaseapp.com",
    projectId: "facebook-clone-6d863",
    storageBucket: "facebook-clone-6d863.appspot.com",
    messagingSenderId: "1077478783101",
    appId: "1:1077478783101:web:d6a4b45f7ea9ff8ea49914",
    measurementId: "G-J03QPK2HCJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;