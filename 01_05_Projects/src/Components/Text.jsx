import React, { useEffect, useState } from "react";
// https://dummyjson.com/products/search?q=${debouncedQuery}
const Text = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // console.log(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearch}`
        );
        const data = await response.json();
        console.log("DATA!!", data);
        setResult(data.products || []);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch]);

  return (
    <div>
      <h1>DebouncedSearch</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Something"
        className="border rounded-lg p-2 my-2"
      />
      <div className="bg-amber-100 p-2 mt-6">
        {/* {search} */}
        {result.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 m-4 p-4 flex items-center gap-4"
          >
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Text;
