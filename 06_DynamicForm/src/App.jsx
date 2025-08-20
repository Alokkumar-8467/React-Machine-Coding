
import { useState } from 'react';
import './App.css'
import FormWrapper from './form-wrapper/FormWrapper'
import SimpleForm from './form/SimpleForm';
import DynamicForm from './form/DynamicForm';
import ConfigDynamicForm from './FinalDynamicForm/ConfigDynamicForm';
import LoginForm from './FinalDynamicForm/LoginForm';

const Inputs = [
  {
    type: "test",
    label: "First Name",
    placeholder: "Enter your first name",
    value: "",
    id: "first_name",
    name: "first_name",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "test",
    label: "Last Name",
    placeholder: "Enter your last name",
    value: "",
    id: "last_name",
    name: "last_name",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    id: "email",
    name: "email",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "test",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    value: "",
    id: "phone",
    name: "phone",
    error: "",
    disabled: false,
    readonly: false,
  },
    {
    type: "checkbox",
    label: "Accept Terms and Conditions",
    value: "accent_terms",
    id: "accent_terms",
    name: "accent_terms",
    error: "",
    disabled: false,
    readonly: false,
  },
];

function App() {

  const [inputs, setInputs] = useState(structuredClone(Inputs))

  const handleFormSubmit = (data) => {
    console.log("Form submitted data:", data);
  };
  

  return (
   <>
    {/* <FormWrapper inputs={inputs} /> */}
    <SimpleForm />
    <DynamicForm />
    <ConfigDynamicForm onSubmit={handleFormSubmit} />
    <LoginForm onSubmit={handleFormSubmit} />
   </>
  )
}

export default App
