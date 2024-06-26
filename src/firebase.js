import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDFMA5TDV7kuT39jGIkItE04zRAEs5Ikbs",
    authDomain: "todo-list-6da4f.firebaseapp.com",
    projectId: "todo-list-6da4f",
    storageBucket: "todo-list-6da4f.appspot.com",
    messagingSenderId: "458568388930",
    appId: "1:458568388930:web:f4da27d56923a0699ff8db",
    measurementId: "G-NMBEYDH1MD"
  };
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }