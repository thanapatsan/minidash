import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "@/firebase";

export function useAuth() {
  const [user, setUser] = useState();   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return {
    user,
    auth,
  };
}
