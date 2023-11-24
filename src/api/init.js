import { firebaseConfig } from "../firebase.config";

import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const initializeFirestore = (app) => {
  let firebaseStorage = getFirestore(app);
  if (isLocalhost()) {
    connectFirestoreEmulator(firebaseStorage, "localhost", 8080);
  }
  return firebaseStorage;
};

const initializeFirebaseStorage = (app) => {
  let firebaseStorage = getStorage(app);
  if (isLocalhost()) {
    connectStorageEmulator(firebaseStorage, "localhost", 9199);
  }
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
    firebaseStorage,
  };
};

export default initialize();
