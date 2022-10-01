import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC6HT7qi_94ZOEkHXEWVhV9HWAAN-iHmjY",
    authDomain: "authentication-project-c1125.firebaseapp.com",
    projectId: "authentication-project-c1125",
    storageBucket: "authentication-project-c1125.appspot.com",
    messagingSenderId: "1091332467396",
    appId: "1:1091332467396:web:c9b0e1892e730e5c4af791",
    measurementId: "G-NB17ZC3JH4"
  };
  const apps=initializeApp(firebaseConfig);
  export const auth=getAuth(apps);
  