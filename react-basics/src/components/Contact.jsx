import React, { useState } from "react";
import { userContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const { formdata, setFormData } = useContext(userContext);
  const [error, setError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleNext = () => {
    const { email, phno } = formdata;

    if (!email || !phno) return setError("fill all details");
    navigate("/socialhandle");
  };

  return (
    <div className="w-[400px] mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-gray-700 font-bold text-left">Step-2 Form: </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email :
        </label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
          placeholder="enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone No:
        </label>
        <input
          type="text"
          name="phno"
          value={formdata.phno}
          onChange={handlechange}
          placeholder="enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Contact;
