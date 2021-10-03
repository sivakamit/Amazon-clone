import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpZ4lCBq7Rn_ZkVHonMHRwGwEbENxOHSA",
  authDomain: "clone-faf79.firebaseapp.com",
  databaseURL: "https://clone-faf79.firebaseio.com",
  projectId: "clone-faf79",
  storageBucket: "clone-faf79.appspot.com",
  messagingSenderId: "1072596384702",
  appId: "1:1072596384702:web:cca584a0cc0f59f741d7ef",
  measurementId: "G-H9025TDT9T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };