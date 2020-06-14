import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCsF7BJPsaDHQRxrF48yLHO0f561OtDU-Q",
    authDomain: "snowshop-20440.firebaseapp.com",
    databaseURL: "https://snowshop-20440.firebaseio.com",
    projectId: "snowshop-20440",
    storageBucket: "snowshop-20440.appspot.com",
    messagingSenderId: "799256025104",
    appId: "1:799256025104:web:8c2b8216fd740ef51d5295",
};

firebase.initializeApp(config);
export const storage = firebase.storage();
export default firebase;
