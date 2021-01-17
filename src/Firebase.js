import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtL0T62kvmWzbGDvnLbeS0h5ruU4tgYCE",
    authDomain: "proyecto-react-coderhous-91c2d.firebaseapp.com",
    projectId: "proyecto-react-coderhous-91c2d",
    storageBucket: "proyecto-react-coderhous-91c2d.appspot.com",
    messagingSenderId: "705509549115",
    appId: "1:705509549115:web:574e8bbec9a982cd2b681e"
    };

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
    return firebase.firestore(app);
}

