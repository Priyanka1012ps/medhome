import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDfLKwL9g_FxqIRcBh9WQTQXIDrf_xhn_s",
  authDomain: "medhome-f9624.firebaseapp.com",
  projectId: "medhome-f9624",
  storageBucket: "medhome-f9624.appspot.com",
  messagingSenderId: "19797963166",
  appId: "1:19797963166:web:ebf6257b3236048266e68f",
  measurementId: "G-MBEJL8G3DV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
