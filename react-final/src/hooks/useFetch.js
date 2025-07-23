import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response Error");
      }
      const resdata = await res.json();
      setData(resdata);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
      setError("Error fetching data : " + err.message);
    }
  };

  return { data, error, loading };
};

export default useFetchData;
