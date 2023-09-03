import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,
signInWithEmailAndPassword, 
GoogleAuthProvider,
signInWithPopup} from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {

  apiKey: "AIzaSyCEEtSZo9WBgmAaPx_CmaOf1onDQ86pAuA",

  authDomain: "bookify-160f5.firebaseapp.com",

  projectId: "bookify-160f5",

  storageBucket: "bookify-160f5.appspot.com",

  messagingSenderId: "961246739145",

  appId: "1:961246739145:web:30870cf73d1e932485ab18",

  measurementId: "G-SG9400BP3J"

};


export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth,email,password);
  const signinUserWithEmailAndPass = (email, password)=> signInWithEmailAndPassword(firebaseAuth,email,password);
 const signinWithGoogle = () => signInWithPopup(firebaseAuth,googleProvider);
  return (
    <FirebaseContext.Provider value={{
      signinWithGoogle,
      signupUserWithEmailAndPassword,
     signinUserWithEmailAndPass, 
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
