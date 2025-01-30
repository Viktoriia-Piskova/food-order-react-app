import React from "react";

const Input = ({ label, id, required = true, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} required />
    </p>
  );
};

export default Input;
