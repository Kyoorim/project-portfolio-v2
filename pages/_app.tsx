import React, { useState, useEffect } from "react";
import { authService } from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../styles/styles.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(
    authService.currentUser
  );
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);

        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Component {...pageProps} isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "로딩 중..."
      )}
    </>
  );
};

export default App;
