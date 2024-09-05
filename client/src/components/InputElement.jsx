import React from "react";

const InputElement = ({ label, type, name, ...props }) => {
  return (
    <p className="flex  items-center ">
      <label className="flex-1 " htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="flex-1 rounded-lg text-slate-950  p-3"
        type={type}
        {...props}
      />
    </p>
  );
};

export default InputElement;
