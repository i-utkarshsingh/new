import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSJOGt9rkF9EeelNHjhjDxmgxklG66_PY",
  authDomain: "clothinng-bad.firebaseapp.com",
  databaseURL: "https://clothinng-bad.firebaseio.com",
  projectId: "clothinng-bad",
  storageBucket: "clothinng-bad.appspot.com",
  messagingSenderId: "1025590891199",
  appId: "1:1025590891199:web:ba55d59e7fa5045a7cec0a",
  measurementId: "G-042ZD1R4J9",
};

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({pompt: 'select_amount'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;