import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCCzUfxWDDKYymRmPsb5_T1AFk7AoblhkM",
  authDomain: "crwn-clothing-b5e16.firebaseapp.com",
  databaseURL: "https://crwn-clothing-b5e16.firebaseio.com",
  projectId: "crwn-clothing-b5e16",
  storageBucket: "crwn-clothing-b5e16.appspot.com",
  messagingSenderId: "511117053608",
  appId: "1:511117053608:web:808f8f6ef72bb2d87c3c9d",
  measurementId: "G-YLVR0FXFFG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Create user failed:", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
