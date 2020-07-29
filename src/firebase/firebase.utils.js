import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
