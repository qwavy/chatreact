// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// import {useAuthState} from 'react-firebase-hooks'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX6133fn31Wjs7PzFN17ag1bI7BylNvBU",
  authDomain: "react-firebase-auth-54399.firebaseapp.com",
  projectId: "react-firebase-auth-54399",
  storageBucket: "react-firebase-auth-54399.appspot.com",
  messagingSenderId: "959585612291",
  appId: "1:959585612291:web:b0dbe09e910ca476195436",
  measurementId: "G-C0KGE81ED7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuthState(app)
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
// export default firebase