import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyC85u3GNZFaJPZBsy6gCLBqMdPCGh021EA",
  authDomain: "vc-transweb.firebaseapp.com",
  databaseURL: "https://vc-transweb-default-rtdb.firebaseio.com",
  projectId: "vc-transweb",
  storageBucket: "vc-transweb.appspot.com",
  messagingSenderId: "956818349306",
  appId: "1:956818349306:web:3ec2bcb88bfa86a2b73d43",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
