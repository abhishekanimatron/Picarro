import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBXT1VNWTi1PQAPL4usZBceyolbLmFOFOk",
  authDomain: "picarro-907b9.firebaseapp.com",
  projectId: "picarro-907b9",
  storageBucket: "picarro-907b9.appspot.com",
  messagingSenderId: "591856838956",
  appId: "1:591856838956:web:e70a0f7d4a751a400ee489",
};
// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// initializing firebase storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//server generated timestamp from fb

export { projectStorage, projectFirestore, timestamp };
