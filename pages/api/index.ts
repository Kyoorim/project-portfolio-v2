import { authService } from "../../config";
import { dbService } from "../../config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export const SocialLogin = async (e) => {
  const {
    target: { name },
  } = e;
  let provider;

  if (name === "google") {
    provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
  }
};

export const PutPost = async (textObj) => {
  await addDoc(collection(dbService, "list"), textObj);
};

export const apiService = {
  SocialLogin,
  PutPost,
};
