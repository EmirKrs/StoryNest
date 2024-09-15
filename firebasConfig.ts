import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfPYZh8N2e0awBkbzejbugSSs2OecCJd0",
  authDomain: "storynest-c0932.firebaseapp.com",
  projectId: "storynest-c0932",
  storageBucket: "storynest-c0932.appspot.com",
  messagingSenderId: "793087683960",
  appId: "1:793087683960:web:0abb0cf308ecdd4895ec8d",
  measurementId: "G-EB5ZWVV4HV"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export {fireDB};