import 'firebase/auth';
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { setPersistence, browserLocalPersistence } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBJTNQv-VjRomXxiI16MgkXU2H4dUkXRG8",
  authDomain: "fire-d5298.firebaseapp.com",
  projectId: "fire-d5298",
  storageBucket: "fire-d5298.appspot.com",
  messagingSenderId: "770454664082",
  appId: "1:770454664082:web:9af7dcde6951c62584074b",
  measurementId: "G-F8CQL40HZK"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence);
