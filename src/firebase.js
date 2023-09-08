import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAyV3Sb-Ac_NPW7SlYhINM-1aQfuVXplJg',
  authDomain: 'eshop-b0766.firebaseapp.com',
  projectId: 'eshop-b0766',
  storageBucket: 'eshop-b0766.appspot.com',
  messagingSenderId: '377207649625',
  appId: '1:377207649625:web:d0f62e6b10eb1c88874848',
  measurementId: 'G-F6PKVR2R1D',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
