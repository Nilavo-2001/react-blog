import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDVMLAMewYn7WJAh8z7UUN01u5s1h7WpxI",
    authDomain: "react-hooks-blog-9bb88.firebaseapp.com",
    projectId: "react-hooks-blog-9bb88",
    storageBucket: "react-hooks-blog-9bb88.appspot.com",
    messagingSenderId: "338748227360",
    appId: "1:338748227360:web:edb7940af2b70d86726145",
    measurementId: "G-65GVS3PBPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;