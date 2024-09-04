import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryChips = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(categories);

  return (
    <>
      <section className="flex flex-wrap gap-4 p-3 justify-start">
        {categories?.map((chip, index) => (
          <div key={index} className="border border-gray-700 py-3 px-6 rounded-xl">
            <p>{chip}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default CategoryChips;
