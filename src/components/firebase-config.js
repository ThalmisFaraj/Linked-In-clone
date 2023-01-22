import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPTcApjWrC_ytHxmghmV6a6T76nDnUrxA",
  authDomain: "linkedin-clone-8cdb1.firebaseapp.com",
  projectId: "linkedin-clone-8cdb1",
  storageBucket: "linkedin-clone-8cdb1.appspot.com",
  messagingSenderId: "233960753084",
  appId: "1:233960753084:web:73cf5e5cb316585d7b0db9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = getFirestore(app);
const auth = firebaseApp.auth();
// const auth = app.auth();

export { db, auth };
