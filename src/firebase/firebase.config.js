// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaxR9YqH2jXCc3-VVD_H1JXKU88dLUHCQ",
    authDomain: "furnica-client.firebaseapp.com",
    projectId: "furnica-client",
    storageBucket: "furnica-client.appspot.com",
    messagingSenderId: "161751465364",
    appId: "1:161751465364:web:a7e591d810af857f7d2381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;