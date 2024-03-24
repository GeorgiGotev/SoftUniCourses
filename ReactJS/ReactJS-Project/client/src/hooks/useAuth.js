import { getAuth, onAuthStateChanged, } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth();

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }