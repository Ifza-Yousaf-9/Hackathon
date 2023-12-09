import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDsCoLcgjg-yW_R5TSpAYTofnL1dY1ZsuQ",
  authDomain: "student-management-syste-b5831.firebaseapp.com",
  projectId: "student-management-syste-b5831",
  storageBucket: "student-management-syste-b5831.appspot.com",
  messagingSenderId: "693797012576",
  appId: "1:693797012576:web:5712b7f8cb48d497672f05"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };
