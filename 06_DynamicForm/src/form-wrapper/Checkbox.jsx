import React from "react";

const Checkbox = ({
  label,
  type,
  value,
  id,
  name,
  error,
  disabled,
  readonly,
}) => {
  return (
    <div>
      <input
        id={id}
        disabled={disabled}
        readOnly={readonly}
        name={name}
        value={value}
        type={type}
        // placeholder={placeholder}
        // type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
