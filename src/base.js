import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuo4xur_DM4fp3xNweU4OiToOCilCDWgc",
  authDomain: "hot-burgers-b7ce3.firebaseapp.com",
  databaseURL: "https://hot-burgers-b7ce3-default-rtdb.europe-west1.firebasedatabase.app"
  // projectId: "hot-burgers-b7ce3",
  // storageBucket: "hot-burgers-b7ce3.appspot.com",
  // messagingSenderId: "483661267620",
  // appId: "1:483661267620:web:247688cbae0a556a6a5c31"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;