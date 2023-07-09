import React from "react";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, conformPassword } = formFields;

  console.log("formFields", formFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);

    setFormFields({
      ...formFields,
      [name]: value,
    });
    console.log(name);
  };
  return (
    <div>
      <h1>Sign up with you email and password</h1>
      <form onSubmit={handleChange}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <label>Conform Password</label>
        <input
          type="password"
          required
          name="conformPassword"
          onChange={handleChange}
          value={conformPassword}
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};
