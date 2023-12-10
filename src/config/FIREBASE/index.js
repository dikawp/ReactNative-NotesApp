import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAZzxvvGqSvu5FW91yCFR1gyJVjqG9LVWY",
  authDomain: "noteapp-db.firebaseapp.com",
  projectId: "noteapp-db",
  storageBucket: "noteapp-db.appspot.com",
  messagingSenderId: "928072135692",
  appId: "1:928072135692:web:30a90ccb6f7e43cd38ea29",
  databaseURL: "https://noteapp-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

const FIREBASE = firebase;

export default FIREBASE;
