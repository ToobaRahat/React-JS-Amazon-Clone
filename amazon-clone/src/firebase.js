import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCRedNCkM3KCp4gOFcRk2L6lTwK6heTCiU",
  authDomain: "clone-13497.firebaseapp.com",
  databaseURL: "https://clone-13497.firebaseio.com",
  projectId: "clone-13497",
  storageBucket: "clone-13497.appspot.com",
  messagingSenderId: "63168900674",
  appId: "1:63168900674:web:92f9e713eba14cf01987db",
  measurementId: "G-ZB0GSMK7KX",
});

const auth = firebase.auth();

export { auth }; //auth module is for login and logout
