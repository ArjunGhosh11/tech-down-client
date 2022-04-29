// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCui1uUGZBWw2cW4ku8zoMqPUuROqw0Q8k",
    authDomain: "assignment-11-281bf.firebaseapp.com",
    projectId: "assignment-11-281bf",
    storageBucket: "assignment-11-281bf.appspot.com",
    messagingSenderId: "575436754278",
    appId: "1:575436754278:web:40e80396cc84dba0864ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;