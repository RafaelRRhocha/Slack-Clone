// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBFV1KZ5kJJsno8V-YDv95gSC32hwJ2kI",
  authDomain: "slack-clone-67c66.firebaseapp.com",
  projectId: "slack-clone-67c66",
  storageBucket: "slack-clone-67c66.appspot.com",
  messagingSenderId: "690413291823",
  appId: "1:690413291823:web:2e59de72ab85e70eec39da",
  measurementId: "G-40TD0WBWB1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.fireStore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
