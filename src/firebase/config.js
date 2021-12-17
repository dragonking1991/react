import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbYfL94bhNQa8j_28Ldx55dvD_s2W4Mm8",
  authDomain: "rtest-bc78d.firebaseapp.com",
  projectId: "rtest-bc78d",
  storageBucket: "rtest-bc78d.appspot.com",
  messagingSenderId: "651772601976",
  appId: "1:651772601976:web:e7352a5a97ae83f4112f8d",
  measurementId: "G-9N5WSV53W5"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099/')
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080')
}

export { auth, db };

export default firebase;