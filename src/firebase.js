import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCYrqQY8g2rwFCeK60jb7VUGmuB3YWuzGw",
    authDomain: "cryptochallenge-c604b.firebaseapp.com",
    databaseURL: "https://cryptochallenge-c604b.firebaseio.com",
    projectId: "cryptochallenge-c604b",
    storageBucket: "cryptochallenge-c604b.appspot.com",
    messagingSenderId: "130717529355"
  };
  firebase.initializeApp(config);
  export default firebase;