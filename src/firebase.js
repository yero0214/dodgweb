import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/functions"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDheitVauZk677ujPjCIs2_1lRE9hCf_W8",
    authDomain: "leagueofhaine-1b716.firebaseapp.com",
    projectId: "leagueofhaine-1b716",
    storageBucket: "leagueofhaine-1b716.appspot.com",
    messagingSenderId: "846755171974",
    appId: "1:846755171974:web:ae467ced80f2bee6e1cb07",
    measurementId: "G-SPGK6XWQN6" 
});

const auth = firebaseApp.auth();
const functions = firebaseApp.functions();

export {auth};
export {functions};
