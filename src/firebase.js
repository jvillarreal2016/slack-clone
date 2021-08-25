import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOMvYYDjxZNlVJyIM6Vgs4i3_U6hU1frs",
    authDomain: "slack-clone-2d0b9.firebaseapp.com",
    projectId: "slack-clone-2d0b9",
    storageBucket: "slack-clone-2d0b9.appspot.com",
    messagingSenderId: "1094434336949",
    appId: "1:1094434336949:web:54b09e8556f0cc0af20efc",
    measurementId: "G-1X96FKCNQF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider;

  export { auth, provider };
  export default db;