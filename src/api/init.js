import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiD02hCxP-2bFPYHLRGOs_mYF25hHKLnA",
  authDomain: "qode-8795d.firebaseapp.com",
  projectId: "qode-8795d",
  storageBucket: "qode-8795d.appspot.com",
  messagingSenderId: "628570874612",
  appId: "1:628570874612:web:1782c08b5435e39574f4a1",
  measurementId: "G-7MBD7TWGXY"
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
