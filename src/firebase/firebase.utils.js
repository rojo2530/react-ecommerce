import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyDsaEQxEqy5a7SqjQ9TlNjNoH61xqDw9RU",
  authDomain: "crwn-db-5227c.firebaseapp.com",
  databaseURL: "https://crwn-db-5227c.firebaseio.com",
  projectId: "crwn-db-5227c",
  storageBucket: "crwn-db-5227c.appspot.com",
  messagingSenderId: "255064015647",
  appId: "1:255064015647:web:fec3d6018222e6a8d0e62a",
  measurementId: "G-Q1HZ7JZ1PY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;