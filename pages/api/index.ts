import { authService } from "../../config";
import { dbService } from "../../config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { List } from "../../types";
import React from "react";

export const SocialLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {target: {name: string}}) => {
  const name = e.target.name;

  let provider;

  if (name === "google") {
    provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
  }
};

export const PutPost = async (textObj: List) => {
  await addDoc(collection(dbService, "list"), textObj);
};

export const apiService = {
  SocialLogin,
  PutPost,
};
