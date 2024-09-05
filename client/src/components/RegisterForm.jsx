import React from "react";
import { Form, Link } from "react-router-dom";
import InputElement from "./InputElement";

const RegisterForm = () => {
  return (
    <Form
      className="bg-slate-600 flex flex-col rounded-2xl text-2xl gap-5  p-5 text-white w-1/2"
      method="POST"
    >
      <InputElement name="fName" type="text" label="Enter your First Name" />
      <InputElement name="lName" type="text" label="Enter your Last Name" />
      <InputElement
        name="phoneNumber"
        type="number"
        label="Enter your Contact Number"
      />
      <InputElement name="email" type="email" label="Enter your Email" />

      <InputElement name="password" type="password" label="Create Password" />
      <InputElement
        name="confirmPassword"
        type="password"
        label="Confirm Password"
      />
      <button className="text-white bg-slate-950 rounded-lg hover:bg-white hover:text-black">
        Register
      </button>
      <Link className="hover:underline hover:text-black" to="/">
        already have account ? login
      </Link>
    </Form>
  );
};

export default RegisterForm;
