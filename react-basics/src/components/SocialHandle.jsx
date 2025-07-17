import React, { useState } from "react";
import { userContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SocialHandle = () => {
  const navigate = useNavigate();
  const { formdata, setFormData, allForm, setAllForm } =
    useContext(userContext);
  const [error, setError] = useState("");

  const hanldechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    const { linkdin, github } = formdata;

    if (!linkdin || !github) return setError("fill all details");
    setAllForm([...allForm, formdata]);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phno: "",
      linkdin: "",
      github: "",
    });

    navigate("/dashboard");
  };

  return (
    // <div>
    //   <label>Linkdin :</label>
    //   <input
    //     type="text"
    //     name="linkdin"
    //     value={formdata.linkdin}
    //     onChange={hanldechange}
    //     placeholder="enter your linkdin"
    //   />
    //   <br />
    //   <label>Github Id :</label>
    //   <input
    //     type="text"
    //     name="github"
    //     value={formdata.github}
    //     onChange={hanldechange}
    //     placeholder="enter your github Id"
    //   />
    //   <br />
    //   {error}
    //   <br />
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>
    <div className="w-[400px] mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-gray-700 font-bold text-left">Final Form: </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Linkdin Id:
        </label>
        <input
          type="text"
          name="linkdin"
          value={formdata.linkdin}
          onChange={hanldechange}
          placeholder="enter your linkdin"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Github Id:
        </label>
        <input
          type="text"
          name="github"
          value={formdata.github}
          onChange={hanldechange}
          placeholder="enter your github Id"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SocialHandle;
