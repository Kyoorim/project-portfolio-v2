import { authService } from "../../config";
import { dbService } from "../../config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { List } from "../../types";

export const SocialLogin = async (e: Event) => {
  // const {
  //   target: { name },
  // } = e;

  const name = (e.target as HTMLButtonElement).name;

  let provider;

  if (name === "google") {
    provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
  }
};

export const PutPost = async (textObj: List) => {
  await addDoc(collection(dbService, "list"), textObj);
  console.log(textObj);
};

export const apiService = {
  SocialLogin,
  PutPost,
};
