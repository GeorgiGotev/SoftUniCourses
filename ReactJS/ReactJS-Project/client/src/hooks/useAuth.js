import { getAuth, onAuthStateChanged, updateCurrentUser, } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth();

export function useAuth(username) {
    const [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      const getUser = onAuthStateChanged(auth, user => setCurrentUser(user));
      return getUser;
    }, [])
  
    return currentUser;
  }