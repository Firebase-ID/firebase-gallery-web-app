import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCLLQ_Qy5bfAwOOzLxiC0Y8nZB4R27a3k",
  authDomain: "live-demo-firebase.firebaseapp.com",
  projectId: "live-demo-firebase",
  storageBucket: "live-demo-firebase.appspot.com",
  messagingSenderId: "89267697560",
  appId: "1:89267697560:web:b5180668bed6be7a0d9ded",
  measurementId: "G-TYFCHQ4DYH"
};

const initializeFirestore = (app) => {
  let firestore = getFirestore(app);
  return firestore;
};

const initializeFirebaseStorage = (app) => {
  let firebaseStorage = getStorage(app);
  return firebaseStorage;
};


const initializeAnalytics = (app) => {
  getAnalytics(app);
};

const isLocalhost = () => {
  if (window.location.hostname.includes("localhost")) {
    return true;
  }
  return false;
};

const initialize = () => {
  const app = initializeApp(firebaseConfig);
  initializeAnalytics(app);
  const firestore = initializeFirestore(app);
  const firebaseStorage = initializeFirebaseStorage(app);
  return {
    firestore,
    firebaseStorage
  }
}

export default initialize();
