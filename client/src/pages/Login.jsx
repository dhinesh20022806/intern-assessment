import React from "react";
import LoginForm from "../components/LoginForm";
import { json, redirect } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100vh] ">
      <h1 className="text-slate-400 text-5xl uppercase">React Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;

export async function action({ request }) {
  console.log("fired");
  const data = await request.formData();

  console.log(data.get("emailOrPhoneNo"));

  const userLogin = {
    emailOrPhoneNo: data.get("emailOrPhoneNo"),
    password: data.get("password"),
  };

  console.log(userLogin);

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin),
  });

  if (!response.ok) {
    throw json({ msg: "internal error" }, { status: 500 });
  }
  const user = await response.json();
  localStorage.setItem("user", JSON.stringify(user.msg));
  return redirect("/welcome");
}
