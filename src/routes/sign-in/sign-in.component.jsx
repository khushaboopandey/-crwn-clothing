import React from "react";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const googleLoginUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      helo singn in
      <button onClick={googleLoginUser}>google sign in</button>
      <SignUpForm />
    </div>
  );
}
