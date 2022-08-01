import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKBCLMfH7QziBu7v7VbLDj7EwT8z8tNL4",
    authDomain: "mi-proyecto-5abd5.firebaseapp.com",
    databaseURL: "https://mi-proyecto-5abd5-default-rtdb.firebaseio.com",
    projectId: "mi-proyecto-5abd5",
    storageBucket: "mi-proyecto-5abd5.appspot.com",
    messagingSenderId: "101156000868",
    appId: "1:101156000868:web:b41b85d49b88fc41ccbb71"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();