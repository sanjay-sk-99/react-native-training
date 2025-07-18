import React, { useEffect, useState } from "react";

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Network response Error");
      }
      const resdata = await res.json();
      setData(resdata);
      setLoading(false)
    } catch (err) {
      console.log(err.message);
      setError("Error fetching data : " + err.message)
    }
  };

  useEffect(()=>{
     fetchData()
  },[])
  return { data, error, loading };
};

export default UseFetch;
