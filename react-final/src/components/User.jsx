import React from "react";
import UseFetch from "../hooks/UseFetch";

const User = () => {
  const { data, loading, error } = UseFetch();
  return (
    <div>
      {loading ? (
        <p>fetching data....</p>
      ) : (
        <div className=" bg-[#D2B48C] flex flex-wrap justify-around w-[900px] rounded-2xl">
          {data.map((us, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 m-4 w-72 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {us.name}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">Username:</span> {us.username}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {us.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
