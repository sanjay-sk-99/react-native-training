import React, { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();
const UserContext = ({ children }) => {
  //storing form data in each step
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phno: "",
    linkdin: "",
    github: "",
  });
  //all user data stored in this state
  const [allForm, setAllForm] = useState([]);
  return (
    <userContext.Provider
      value={{ formdata, setFormData, allForm, setAllForm }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
