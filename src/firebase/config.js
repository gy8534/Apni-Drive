import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD9cTHvA2fBF_0DYEGxIls5JzL-V_47qmQ",
  authDomain: "firegram-9ef9a.firebaseapp.com",
  databaseURL: "https://firegram-9ef9a.firebaseio.com",
  projectId: "firegram-9ef9a",
  storageBucket: "firegram-9ef9a.appspot.com",
  messagingSenderId: "379918510543",
  appId: "1:379918510543:web:2349df1a823cdd8e108aba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };