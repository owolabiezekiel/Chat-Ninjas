import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyArtz5QKeGo27DuyQ6yiEjoyXCxvMaYxpo",
  authDomain: "chat-ninjas-95774.firebaseapp.com",
  databaseURL: "https://chat-ninjas-95774.firebaseio.com",
  projectId: "chat-ninjas-95774",
  storageBucket: "chat-ninjas-95774.appspot.com",
  messagingSenderId: "1056214513712",
  appId: "1:1056214513712:web:dae2ccf803df30942555f5",
  measurementId: "G-2HBGBR86TE"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()