import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyDnnUQ_o0C8VOtrQe1d5bDjJg5wciLHlcs",
  authDomain: "line-clone-e35cd.firebaseapp.com",
  projectId: "line-clone-e35cd",
  storageBucket: "line-clone-e35cd.appspot.com",
  messagingSenderId: "105114928887",
  appId: "1:105114928887:web:9393df29133d4fda92b5f2"
});

const db=firebaseApp.firestore();

const auth=firebase.auth();

export{db,auth};