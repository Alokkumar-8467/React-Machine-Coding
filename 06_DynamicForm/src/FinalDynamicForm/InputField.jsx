import React from "react";

const InputField = ({ field, value, onChange }) => {
  const { type, name, placeholder, label, options } = field;

  switch (type) {
    case "text":
    case "email":
    case "password":
      return (
        <div className="mb-4">
          {label && <label htmlFor={name}>{label}</label>}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>
      );

    case "checkbox":
      return (
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name={name}
              checked={value || false}
              onChange={onChange}
            />
            {label}
          </label>
        </div>
      );

    case "select":
      return (
        <div className="mb-4">
          {label && <label htmlFor={name}>{label}</label>}
          <select
            name={name}
            value={value || ""}
            onChange={onChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select</option>
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

export default InputField;
