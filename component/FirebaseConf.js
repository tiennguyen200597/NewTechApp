import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDV8eZjMu30dB4ME8klu6voBEQ_MXxRfQo",
    authDomain: "newtechapp-a9b8b.firebaseapp.com",
    databaseURL: "https://newtechapp-a9b8b.firebaseio.com",
    projectId: "newtechapp-a9b8b",
    storageBucket: "newtechapp-a9b8b.appspot.com",
    messagingSenderId: "700439337357",
    appId: "1:700439337357:web:a4b23522da67415d"
  };

  export const FirebaseApp = firebase.initializeApp(firebaseConfig);