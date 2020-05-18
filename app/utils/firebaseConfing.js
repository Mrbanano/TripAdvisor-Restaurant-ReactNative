import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

//change name to firebase