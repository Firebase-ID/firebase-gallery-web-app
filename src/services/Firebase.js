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
  apiKey: "AIzaSyCrse7ikICGrFNXNGJ7lwQwPtV4A-6Fzcs",
  authDomain: "helpers-webar-2.firebaseapp.com",
  databaseURL: "https://helpers-webar-2.firebaseio.com",
  projectId: "helpers-webar-2",
  storageBucket: "helpers-webar-2.appspot.com",
  messagingSenderId: "390056800913",
  appId: "1:390056800913:web:0ff8a20f615903dece0530",
  measurementId: "G-PGB9CV43TF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();
