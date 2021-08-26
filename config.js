
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
   
        apiKey: "AIzaSyAi_E6aJ3Z1f02yBBwavg51VR61ALeJBYg",
        authDomain: "pruebas-5fa4d.firebaseapp.com",
        databaseURL: "https://pruebas-5fa4d-default-rtdb.firebaseio.com",
        projectId: "pruebas-5fa4d",
        storageBucket: "pruebas-5fa4d.appspot.com",
        messagingSenderId: "1069473660624",
        appId: "1:1069473660624:web:d5e7bc8a5f996dd03fe8d5"
    
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const bd = firebase;



