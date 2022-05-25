import React from 'react';
function Input({ onChange, value, formValue }) {
  return (
    <input
      value={formValue || value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}

export default Input;
