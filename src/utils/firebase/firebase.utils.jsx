// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnJy22M3UjWNnjOihuJHfGlrZ_hN560Ls",
  authDomain: "crown-clothing-db-b5831.firebaseapp.com",
  projectId: "crown-clothing-db-b5831",
  storageBucket: "crown-clothing-db-b5831.appspot.com",
  messagingSenderId: "13441817604",
  appId: "1:13441817604:web:3b204e12ce0b257cdc2951",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
