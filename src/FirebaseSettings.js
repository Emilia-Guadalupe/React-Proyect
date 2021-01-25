import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

/*const apiKey = process.env.REACT_APP_apiKey
const authDomain = process.env.REACT_APP_authDomain
const databaseURL = process.env.REACT_APP_databaseURL
const projectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const appId = process.env.REACT_APP_appId

const firebaseConfig = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId }; */

const firebaseConfig = {
    apiKey: "AIzaSyDtL0T62kvmWzbGDvnLbeS0h5ruU4tgYCE",
    authDomain: "proyecto-react-coderhous-91c2d.firebaseapp.com",
    databaseURL: "https://proyecto-react-coderhous-91c2d-default-rtdb.firebaseio.com",
    projectId: "proyecto-react-coderhous-91c2d",
    storageBucket: "proyecto-react-coderhous-91c2d.appspot.com",
    messagingSenderId: "705509549115",
    appId: "1:705509549115:web:574e8bbec9a982cd2b681e"
    };

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
    return firebase.firestore(app);
}

