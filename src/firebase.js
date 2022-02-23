import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgjqSxsfdwv0cqrPDzitiD2Rid9us5PPg",
  authDomain: "netflix-clone-d9e01.firebaseapp.com",
  projectId: "netflix-clone-d9e01",
  storageBucket: "netflix-clone-d9e01.appspot.com",
  messagingSenderId: "1050279804274",
  appId: "1:1050279804274:web:bd4851b08748a18d6a71eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};
