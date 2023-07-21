import React from "react";

export const Input = ({ type, onChange, placeholder }) => {
  return (
    <input
      type={type}
      className="form-control mt-4"
      autoComplete="off"
      placeholder={placeholder || `Enter ${type}`}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
