import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD-BxuQJpjG58jgEtd7_X1bCmbxv9MrquE",
  authDomain: "pave-18f47.firebaseapp.com",
  databaseURL: "https://pave-18f47.firebaseio.com",
  projectId: "pave-18f47",
  storageBucket: "",
  messagingSenderId: "602102321045",
  appId: "1:602102321045:web:296ce0b49b3e208ca9f09c",
  measurementId: "G-4V6BZXZ7EP"
};

const fire = firebase.initializeApp(config);
export default fire;