import firebase from 'firebase'

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false
  }
};

var firebaseConfig = {
  apiKey: "AIzaSyABG0oOFwwoQxM2zJIKa7W7IyhLRq-49HQ",
  authDomain: "fir-auth-5d704.firebaseapp.com",
  databaseURL: "https://fir-auth-5d704.firebaseio.com",
  projectId: "fir-auth-5d704",
  storageBucket: "fir-auth-5d704.appspot.com",
  messagingSenderId: "333101631114",
  appId: "1:333101631114:web:84f75056a61ce7a3ea8f73",
  measurementId: "G-LMHM1TB911"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();
