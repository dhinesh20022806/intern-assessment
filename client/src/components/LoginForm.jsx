import React from "react";
import { Form, Link } from "react-router-dom";
import InputElement from "./InputElement";

const LoginForm = () => {
  return (
    <Form
      className="bg-slate-600 flex flex-col rounded-2xl text-2xl gap-5  p-5 text-white w-1/2"
      method="POST"
    >
      <InputElement
        name="emailOrPhoneNo"
        type="text"
        label="Enter your Contact Number or Email"
        placeholder="email or phone"
      />
      <InputElement
        name="password"
        type="password"
        label="Enter Your Password"
        placeholder="password"
      />

      <button className="text-white bg-slate-950 rounded-lg hover:bg-white hover:text-black">
        Login
      </button>
      <Link className="hover:underline hover:text-black" to="/register">
        Create new Account
      </Link>
    </Form>
  );
};

export default LoginForm;
