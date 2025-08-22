

import React, { useState } from "react";
import InputField from "./InputField";
import { loginFields } from "../formFields";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // pass data up
  };

  return (
    <div>
      <h1>Login Form</h1>
    <form onSubmit={handleSubmit}>
      {loginFields.map((field, index) => (
        <InputField
          key={index}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
    </div>
  );
};


export default LoginForm;

