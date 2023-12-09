// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDsCoLcgjg-yW_R5TSpAYTofnL1dY1ZsuQ",
  authDomain: "student-management-syste-b5831.firebaseapp.com",
  projectId: "student-management-syste-b5831",
  storageBucket: "student-management-syste-b5831.appspot.com",
  messagingSenderId: "693797012576",
  appId: "1:693797012576:web:5712b7f8cb48d497672f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
