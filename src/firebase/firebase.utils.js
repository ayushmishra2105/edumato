import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBjb7ZAWzzKJlOaVZ0TtoAsUg3HCNle10A",
    authDomain: "edumato.firebaseapp.com",
    databaseURL: "https://edumato.firebaseio.com",
    projectId: "edumato",
    storageBucket: "edumato.appspot.com",
    messagingSenderId: "834878690062",
    appId: "1:834878690062:web:7208d42e2c6ca0fa56bd5f"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;