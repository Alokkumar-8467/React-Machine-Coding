const formFields = [
  { name: "name", type: "text", placeholder: "Enter Name", label: "Name" },
  { name: "email", type: "email", placeholder: "Enter Email", label: "Email"},
  { name: "password", type: "password", placeholder: "Enter Password", label: "password" },
  { name: "subscribe", type: "checkbox", label: "Subscribe" },
  { name: "country", type: "select", options: ["India", "USA", "UK"], label: "Country" }
];

const loginFields = [
  { name: "email", type: "email", placeholder: "Enter Email", label: "Email"},
  { name: "password", type: "password", placeholder: "Enter Password", label: "password" }
];
export { formFields, loginFields };