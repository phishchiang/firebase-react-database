import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
// You can get this from Firebase project > Settings > Genral > Web > Firebase SDK snippet
//

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX.firebaseapp.com",
  databaseURL: "https://XXX.firebaseio.com",
  projectId: "XXX",
  storageBucket: "XXX.appspot.com",
  messagingSenderId: "XXX",
  appId: "XXX",
  measurementId: "XXX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
