import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOrDDw1N6PdK0paF6rHJm3O2E356-Oc5E",
  authDomain: "green-light-c5745.firebaseapp.com",
  databaseURL: "https://green-light-c5745.firebaseio.com",
  projectId: "green-light-c5745",
  storageBucket: "green-light-c5745.appspot.com",
  messagingSenderId: "616763963252",
  appId: "1:616763963252:web:86a005be6b56e4a0eade21",
  measurementId: "G-EWVHN7565B"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();