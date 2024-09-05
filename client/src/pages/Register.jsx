import React from "react";
import { json, redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100vh]">
      <h1 className="text-slate-400 text-5xl uppercase">React Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;

export async function action({ request }) {
  const data = await request.formData();

  const userRegister = {
    fName: data.get("fName"),
    lName: data.get("lName"),
    phoneNumber: data.get("phoneNumber"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };

  console.log(userRegister);

  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRegister),
  });
  if (!response.ok) {
    throw json({ message: "Internal Error" }, { status: 500 });
  }
  return redirect("/");
}
