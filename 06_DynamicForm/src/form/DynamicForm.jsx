import React, { useState } from 'react'
import Checkbox from '../form-wrapper/Checkbox.jsx';
import { formFields } from '../formFields.js';

// const formFields = [
//   { name: "name", type: "text", placeholder: "Enter Name" },
//   { name: "email", type: "email", placeholder: "Enter Email" },
//   { name: "password", type: "password", placeholder: "Enter Password" },
//   { name: "subscribe", type: "checkbox", label: "Subscribe" },
//   { name: "country", type: "select", options: ["India", "USA", "UK"] }
// ];

const DynamicForm = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const {name, type, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name] : type === "checkbox" ? checked : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <h1>DynamicForm</h1>
      <form onSubmit={handleSubmit} className='form'>
        {
          formFields.map((field, index) => (
            <input 
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              onChange={handleChange}
            />
          ))
        }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DynamicForm