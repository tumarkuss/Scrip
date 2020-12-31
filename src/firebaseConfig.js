import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBK5bFwqGb7vYUvqkiR9KYbVAqoLlLRTNE",
    authDomain: "inline-9bc2e.firebaseapp.com",
    projectId: "inline-9bc2e",
    storageBucket: "inline-9bc2e.appspot.com",
    messagingSenderId: "291187887472",
    appId: "1:291187887472:web:c658e36aacf8b4863853b5",
    measurementId: "G-XQDKW37F58"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore(app);

  export const restsRef = db.collection('rests');

  export {firebase};