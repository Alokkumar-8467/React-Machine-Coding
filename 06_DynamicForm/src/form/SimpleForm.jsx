import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subscribe: false,
    profilePic: null,
    country: "",
  });

  const [formDataList, setFormDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked, files, type } = e.target;

    let inputValue = value;
    if (type === "checkbox") {
      inputValue = checked;
    }

    if (type === "file") {
      inputValue = files[0];
    }

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic form validation
    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    // here we just copy our object data of formData into formDataList
    setFormDataList((prev) => [...prev, formData]);
    console.log("Form Submitted", formData);
    console.log("setFormDataList Submitted", formDataList);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] form">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name "
          id="userName"
          type="text"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          id="userEmail"
          type="email"
        />

        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe || false}
          onChange={handleChange}
        />

        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>

        <input type="file" name="profilePic" onChange={handleChange} />

        <button
          type="submit"
          className="bg-green-500 h-[40px] rounded-lg text-[#fff] text-[20px] font-bold cursor-pointer hover:bg-green-600"
        >
          Submit
        </button>
      </form>
      <div>
        {formDataList.map((data, index) => (
          <div
            key={index}
            className="my-[12px] w-[50%] flex justify-between shadow-2xl p-4 rounded-2xl"
          >
            <div className="text-left text-4xl">
              <h1>Name:- {data.name}</h1>
              <p>Email:- {data.email}</p>
              <p>County- {data.country}</p>
              <p>
                Subscription:-{" "}
                {data.subscribe ? "Subscribed" : "Not Subscribed"}
              </p>
            </div>
            <div>
              {data.profilePic && (
                <img
                  width={200}
                  src={URL.createObjectURL(data.profilePic)}
                  alt="Preview"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleForm;
