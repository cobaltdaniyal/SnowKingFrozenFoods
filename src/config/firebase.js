import * as firebase from "firebase/app"
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2nPspvpcnBrA3znf335jHJ9VjFdLYDss",
    authDomain: "snowkingfrozenfoods.firebaseapp.com",
    databaseURL: "https://snowkingfrozenfoods-default-rtdb.firebaseio.com",
    projectId: "snowkingfrozenfoods",
    storageBucket: "snowkingfrozenfoods.appspot.com",
    messagingSenderId: "325409301359",
    appId: "1:325409301359:web:602dfdb4d99badd5d9be9a",
    measurementId: "G-WFBML0E14W"
};


firebase.initializeApp(firebaseConfig);
export default firebase;





