import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFKt5otVznWPM6ZHrCIeDMQuN1-fyRj_Y",
    authDomain: "instagram-clone-b88e2.firebaseapp.com",
    databaseURL: "https://instagram-clone-b88e2.firebaseio.com",
    projectId: "instagram-clone-b88e2",
    storageBucket: "instagram-clone-b88e2.appspot.com",
    messagingSenderId: "478855573330",
    appId: "1:478855573330:web:c8b50c88a722ccbb6ad48b",
    measurementId: "G-ENE0HFY9H7"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{db,auth,storage};