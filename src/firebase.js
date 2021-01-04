import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCikd7bucNM6GQdEnb18CbgvR5UcHbOi50",
    authDomain: "instant-messenger-93aa5.firebaseapp.com",
    projectId: "instant-messenger-93aa5",
    storageBucket: "instant-messenger-93aa5.appspot.com",
    messagingSenderId: "253432754107",
    appId: "1:253432754107:web:5f21b6dc556126bb7f9e9e",
    measurementId: "G-BP3RK0TK6N"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;