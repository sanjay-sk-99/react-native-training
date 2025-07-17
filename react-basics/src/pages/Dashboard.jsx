import React, { useState } from "react";
import { userContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {allForm,setAllForm}=useContext(userContext)
    const navigate = useNavigate()

    const handleDelete=(index)=>{
       const filterUser = allForm.filter((_,i)=>i != index)
       setAllForm(filterUser)
    }
  return (
  <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
  <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome to User Portal</h1>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
      <thead>
        <tr className="bg-gray-100 text-gray-700 text-left">
          <th className="py-2 px-4 border-b">First Name</th>
          <th className="py-2 px-4 border-b">Last Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Phone No</th>
          <th className="py-2 px-4 border-b">LinkedIn ID</th>
          <th className="py-2 px-4 border-b">GitHub ID</th>
          <th className="py-2 px-4 border-b">Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {allForm.map((data, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b text-black">{data.firstname}</td>
            <td className="py-2 px-4 border-b text-black">{data.lastname}</td>
            <td className="py-2 px-4 border-b text-black">{data.email}</td>
            <td className="py-2 px-4 border-b text-black">{data.phno}</td>
            <td className="py-2 px-4 border-b text-black">{data.linkdin}</td>
            <td className="py-2 px-4 border-b text-black">{data.github}</td>
            <td className="py-2 px-4 border-b text-black">
              <button  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200" onClick={()=>handleDelete(i)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="mt-6 text-center">
    <button
      onClick={() => navigate('/')}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
    >
      Add New user
    </button>
  </div>
</div>

  )
}

export default Dashboard
