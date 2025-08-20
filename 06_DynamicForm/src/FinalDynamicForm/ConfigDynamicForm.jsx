import React, { useState } from "react";
import InputField from "./InputField";
import { formFields } from "../formFields";

const ConfigDynamicForm = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
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
  );
};

export default ConfigDynamicForm;
