import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
