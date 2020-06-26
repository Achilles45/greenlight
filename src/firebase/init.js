import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvbXFtN2jkX0sSnIOHLHoWn30xOUJJMjw",
  authDomain: "courage-earners.firebaseapp.com",
  databaseURL: "https://courage-earners.firebaseio.com",
  projectId: "courage-earners",
  storageBucket: "courage-earners.appspot.com",
  messagingSenderId: "111268271186",
  appId: "1:111268271186:web:0ddfd26823de77eb37fb8b",
  measurementId: "G-1ZBPL459CE"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();