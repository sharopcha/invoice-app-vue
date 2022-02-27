import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfCRWpqcaucwS1klM6YfdT9L5yMBHOGdk',
  authDomain: 'vue-calendar-ec904.firebaseapp.com',
  databaseURL: 'https://vue-calendar-ec904.firebaseio.com',
  projectId: 'vue-calendar-ec904',
  storageBucket: 'vue-calendar-ec904.appspot.com',
  messagingSenderId: '454209682700',
  appId: '1:454209682700:web:ed707f4007e81811751d29',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
