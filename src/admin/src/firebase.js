import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBznT40ZoLk9vpyVJPQ5TUWhJ3crSo6bok",
  authDomain: "netflix-3983a.firebaseapp.com",
  projectId: "netflix-3983a",
  storageBucket: "netflix-3983a.appspot.com",
  messagingSenderId: "232452060847",
  appId: "1:232452060847:web:881be69d7cd4c0da75865a",
  measurementId: "G-E25KJQQRS6",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
