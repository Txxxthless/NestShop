import React from "react";

export const Select = ({ items, onChange }) => {
  return (
    <select
      className="form-select mb-4 mt-4"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {items.map((item) => (
        <option value={item.name} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
