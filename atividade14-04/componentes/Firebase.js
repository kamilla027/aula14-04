import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC80GEM4lLwpptzTIiCbUiRZOeoKD0MC_s",
  authDomain: "appbd-fd749.firebaseapp.com",
  projectId: "appbd-fd749",
  storageBucket: "appbd-fd749.firebasestorage.app",
  messagingSenderId: "82482553801",
  appId: "1:82482553801:web:0fcedb9894409536bc7e18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};