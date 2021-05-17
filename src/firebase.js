import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAF59J2MTP4VyE69smxCe0aMIGWGlmEHes",
  authDomain: "gtalk-29654.firebaseapp.com",
  projectId: "gtalk-29654",
  storageBucket: "gtalk-29654.appspot.com",
  messagingSenderId: "409516645522",
  appId: "1:409516645522:web:db5094576a742af1499a4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
