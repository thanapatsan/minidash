// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const initapp = () => {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
};

let app = initapp();
export const auth = getAuth(app);
export const db = getFirestore(app);
connectFirestoreEmulator(db, "127.0.0.1", 8080);
