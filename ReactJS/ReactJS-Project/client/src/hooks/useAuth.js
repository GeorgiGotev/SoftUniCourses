import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authenticated as auth } from "../lib/firebase";


export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      const getUser = onAuthStateChanged(auth, user => setCurrentUser(user));
      return getUser;
    }, [])

    return currentUser;
  }