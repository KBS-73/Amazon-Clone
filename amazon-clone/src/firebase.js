import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5j0OSBiooX4v6CtrqR_8O1FGY6o0J3sY",
    authDomain: "fir-24da0.firebaseapp.com",
    databaseURL: "https://fir-24da0.firebaseio.com",
    projectId: "fir-24da0",
    storageBucket: "fir-24da0.appspot.com",
    messagingSenderId: "136062008001",
    appId: "1:136062008001:web:fc5e1047525130a19f3240",
    measurementId: "G-9WV269Z7F4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};