import React, { useEffect, useState } from "react";

const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) {
      setProducts([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}`
        );
        const data = await res.json();
        console.log("all!", data);

        setProducts(data.products || []);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div className="my-12">
      <input
        type="text"
        placeholder="Serach Products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-1 rounded-lg w-full h-[40px] p-2  focus:outline-red focus:ring-1"
      />

      {loading && <p>Loading...</p>}
      <div className="bg-amber-100 p-2 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 m-4 p-4 flex items-center gap-4"
          >
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.discountPercentage} %</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebouncedSearch;
