import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";
import { InputComponent } from "../form-input/form-input.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, conformPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
    // console.log(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (e) {
      console.log("user creation encounter an error", e);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          label="Display Name"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <InputComponent
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <InputComponent
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <InputComponent
          label="Conform Password"
          type="password"
          required
          name="conformPassword"
          onChange={handleChange}
          value={conformPassword}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};
