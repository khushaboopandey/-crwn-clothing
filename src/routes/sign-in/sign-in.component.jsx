import React from "react";
import "./sign-in.component.scss";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../components/sign-in-form /sign-in-form.component";
export default function SignIn() {
  return (
    <div className="authentocation-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
