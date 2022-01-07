
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUzTbeACMYh2DVLSkaS3_19fRF8D4rf8w",
  authDomain: "foodieapp-d3df5.firebaseapp.com",
  databaseURL: "https://foodieapp-d3df5-default-rtdb.firebaseio.com",
  projectId: "foodieapp-d3df5",
  storageBucket: "foodieapp-d3df5.appspot.com",
  messagingSenderId: "640180547866",
  appId: "1:640180547866:web:48be2538c14b134b95bca3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;