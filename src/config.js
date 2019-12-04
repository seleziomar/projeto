import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC7D9AXVXAWD0UGDhrCjufVw0E_-5eM_Gg",
  authDomain: "seb01-465f5.firebaseapp.com",
  databaseURL: "https://seb01-465f5.firebaseio.com",
  projectId: "seb01-465f5",
  storageBucket: "seb01-465f5.appspot.com",
  messagingSenderId: "645762452863",
  appId: "1:645762452863:web:e74c80cfdf238dfd019e4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
