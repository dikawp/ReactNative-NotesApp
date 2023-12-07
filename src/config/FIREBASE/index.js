import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  // Ambil dari Project Settings -> General 
});

const FIREBASE = firebase;

export default FIREBASE;
