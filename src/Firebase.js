import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyIfthlvuVUkrnA5dOb7WLwYohMXNU52E",
    authDomain: "metronics-c5d91.firebaseapp.com",
    projectId: "metronics-c5d91",
    storageBucket: "metronics-c5d91.appspot.com",
    messagingSenderId: "808090458705",
    appId: "1:808090458705:web:cbb7340b838f3dc52c3670",
    measurementId: "G-Y4YNJYNH3R"
  };


  const firebaseapp=firebase.initializeApp(firebaseConfig);

  
  const auth=firebase.auth()


  export {auth};